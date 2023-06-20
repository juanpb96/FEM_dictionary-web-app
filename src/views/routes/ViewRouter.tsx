import { Routes, Route, Navigate } from 'react-router-dom';
import { SearchResultView } from '../SearchResultView';
import { NoFoundView } from '../NoFoundView';
import { SearchRouter } from './SearchRouter';

export enum DictionaryRoutes {
  notfound = 'notfound',
  definition = 'definition'
}

export const ViewRouter = () => {  
  const { definition, notfound } = DictionaryRoutes;

  return (
    <main>
      <Routes>
        <Route
          path={`/${definition}/*`}
          element={
            <SearchRouter>
              <SearchResultView />
            </SearchRouter>
          }
        />
        <Route path={`/${notfound}/*`} element={<NoFoundView />} />
        <Route path="/*" element={<Navigate to={`/${definition}/keyboard`} />} />
      </Routes>  
    </main>
  );
};
