import { useState } from 'react';
import { DataContext } from './DataContext';
import { HashRouter } from 'react-router-dom';

export const DataProvider = ({children}: React.PropsWithChildren) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  return (
    <DataContext.Provider value={{data, setData, error, setError}}>
      <HashRouter>
        {children}
      </HashRouter>
    </DataContext.Provider>
  )
}
