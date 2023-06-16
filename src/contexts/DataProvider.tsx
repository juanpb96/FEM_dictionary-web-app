import { useState } from 'react';
import { DataContext } from './DataContext';
import { BrowserRouter } from 'react-router-dom';

export const DataProvider = ({children}: React.PropsWithChildren) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  return (
    <DataContext.Provider value={{data, setData, error, setError}}>
      <BrowserRouter basename="/FEM_dictionary-web-app">
        {children}
      </BrowserRouter>
    </DataContext.Provider>
  )
}
