import { createContext } from 'react';

export enum ERoles {
  USER = '2001',
  EDITOR = '1984',
  ADMIN = '5150',
}

export interface IUser {
  id: string;
  roles: ERoles[];
}

interface IAuthContext {
  user: IUser | null;
  login(): void;
  register(): void;
  logout(): void;
  resetPassword(): void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
