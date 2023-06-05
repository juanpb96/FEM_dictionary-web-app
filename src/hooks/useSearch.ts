import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWordMeaning } from '../utils/getWordMeaning';
import { DataContext, DataContextType } from '../contexts';
import { DictionaryRoutes } from '../views';

export const useSearch = () => {
  const { data, setData, error, setError } = useContext(DataContext) as DataContextType; 
  const navigate = useNavigate();
  const { definition, notfound } = DictionaryRoutes;
  
  const searchWord = async(word: string) => {
    const { isSuccess, data } = await getWordMeaning(word);

    if (isSuccess) {
      setData(data);
    } else {
      setError(data);
    }

    return { isSuccess };
  };

  const searchWordAndRedirect = async(word: string) => {
    const { isSuccess } = await searchWord(word);

    if (isSuccess) {
      return navigate(`/${definition}/${word}`);
    } else {
      return navigate(`/${notfound}`);
    }
  };
  
  return {
    data,
    error,
    searchWord,
    searchWordAndRedirect
  };
};
