import { ERoles } from 'context-providers/auth/authContext';
import { createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from 'routing/guards/RequireAuth';
import { ERoutes } from 'routing/routes.enum';
import { AppLayout } from '../components/layouts/AppLayout/AppLayout';
import {
  EventPage,
  EventsPage,
  LoginPage,
  NotFoundPage,
  SignUpPage,
  UnauthorizedPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ERoutes.PUBLIC_EVENTS,
        element: <EventsPage />,
      },
      {
        path: `${ERoutes.PUBLIC_EVENTS}/:id`,
        element: <EventPage />,
      },
      {
        path: ERoutes.PUBLIC_UNAUTHORIZED,
        element: <UnauthorizedPage />,
      },
      {
        path: ERoutes.PRIVATE_PROFILE,
        element: (
          <RequireAuth allowedRoles={[ERoles.USER]}>
            <div>PROFILE PAGE</div>
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: ERoutes.PUBLIC_LOGIN,
    element: <LoginPage />,
  },
  {
    path: ERoutes.PUBLIC_SIGNUP,
    element: <SignUpPage />,
  },
]);

export { router };
