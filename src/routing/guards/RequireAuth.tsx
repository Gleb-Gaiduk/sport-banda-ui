import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ERoles, IUser } from '../../context-providers/auth/authContext';
import { useAuth } from '../../context-providers/auth/useAuth';
import { ERoutes } from '../routes.enum';

interface IRequireAuthProps {
  allowedRoles: ERoles[];
}

export const hasAllowedRole = (user: IUser, allowedRoles: ERoles[]): boolean => {
  if (!user.roles && !Array.isArray(user.roles)) return false;
  return Boolean(user?.roles.find((role) => allowedRoles?.includes(role)));
};

function RequireAuth({ allowedRoles }: IRequireAuthProps) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user)
    return <Navigate to={`/${ERoutes.PUBLIC_LOGIN}`} state={{ from: location }} replace />;

  if (hasAllowedRole(auth.user, allowedRoles)) return <Outlet />;
  return <Navigate to={`/${ERoutes.PUBLIC_UNAUTHORIZED}`} state={{ from: location }} replace />;
}

export { RequireAuth };
