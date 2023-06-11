import { useState } from 'react';
import { act, renderHook } from "@testing-library/react";
import { getWordMeaning } from "../../utils/getWordMeaning";
import { VALID_RESPONSE_1_RESULT } from "../../views/tests/fixtures/SearchResult.fixture";
import { useSearch } from "../useSearch";
import { DataContext } from "../../contexts";

jest.mock('../../utils/getWordMeaning', () => ({
  getWordMeaning: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual,
  useNavigate: jest.fn()
}));

jest.mock('axios');

const errorResponse = {
  response: {
    data: {
      title: 'No Definitions Found',
      message: 'Sorry pal, we couldn\'t find definitions for the word you were looking for.',
      resolution: 'You can try the search again at later time or head to the web instead.'
    }
  }
};

describe('Test useSearch hook', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });

  test('should return valid data if search is successful', async() => { 
    (getWordMeaning as jest.Mock).mockResolvedValue({
      isSuccess: true,
      data: VALID_RESPONSE_1_RESULT
    });

    const wrapper = ({children}: React.PropsWithChildren) => {
      const [data, setData] = useState({});
      const [error, setError] = useState({});

      return (
        <DataContext.Provider value={{data, setData, error, setError}}>
          {children}
        </DataContext.Provider>
      );
    };

    const { result } = renderHook(() => useSearch(), { wrapper });

    expect(result.current.data).toEqual({});

    await act(async() => await result.current.searchWord('keyboard'));

    expect(result.current.data).toEqual(VALID_RESPONSE_1_RESULT);
  });

  test('should return an error if search has not found any data', async() => { 
    (getWordMeaning as jest.Mock).mockResolvedValue({
      isSuccess: false,
      data: errorResponse
    });

    const wrapper = ({children}: React.PropsWithChildren) => {
      const [data, setData] = useState({});
      const [error, setError] = useState({});

      return (
        <DataContext.Provider value={{data, setData, error, setError}}>
          {children}
        </DataContext.Provider>
      );
    };

    const { result } = renderHook(() => useSearch(), { wrapper });

    expect(result.current.error).toEqual({});

    await act(async() => await result.current.searchWord('brnch'));

    expect(result.current.error).toEqual(errorResponse);
  });
});