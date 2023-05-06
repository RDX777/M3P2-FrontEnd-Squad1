import { createContext } from 'react';

interface AuthContextType {
  token: string;
  signIn: (mail: string, password: string) => Promise<void>;
  isAuthenticated: boolean;
  userData: object;
  setUserData: any;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
