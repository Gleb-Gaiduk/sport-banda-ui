import { useEffect, useMemo, useState } from 'react';

import { IUser, AuthContext, ERoles } from './authContext';

interface IAuthProviderProps {
  children: JSX.Element;
}

function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  const login = () => {};
  const register = () => {};
  const logout = () => {};
  const resetPassword = () => {};

  useEffect(() => {
    // Temp solution for moccking a user
    const mockedUser = {
      id: '123',
      roles: [ERoles.USER],
    };
    const tm = setTimeout(() => {
      setUser(mockedUser);
      console.log('Mocked user is fetched');
    }, 2000);
    return () => clearTimeout(tm);
  }, []);

  const contextData = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
      resetPassword,
    }),
    [user],
  );

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
