import { createContext } from 'react';

type AppContextProps = {
  authenticated: boolean;
  lang: string;
  theme: string;
};

const AppContext = createContext<Partial<AppContextProps>>({});

export default AppContext;
