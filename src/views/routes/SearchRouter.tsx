import { useSearch } from '../../hooks/useSearch';
import { Navigate, useLocation } from 'react-router-dom';
import { DictionaryRoutes } from './ViewRouter';

export const SearchRouter = ({children}: React.PropsWithChildren) => {
  const { data, error, searchWord } = useSearch();
  const { pathname } = useLocation();
  const { definition, notfound } = DictionaryRoutes;
  let shouldRedirect = true;

  if ([data, error].every((obj: any) => Object.entries(obj).length === 0)) {
    const [view, word] = pathname.split('/').filter(segment => segment !== '');

    if (view === definition && word) {
      searchWord(word);
      shouldRedirect = false;
    }
  } else if (Array.isArray(data)) {
    shouldRedirect = false;
  }

  return shouldRedirect
    ? <Navigate to={`/${notfound}`} />
    : <>{children}</>
};
