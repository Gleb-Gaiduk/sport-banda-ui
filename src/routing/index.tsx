import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout/AppLayout';
import { ERoles } from '../context-providers/auth/authContext';
import { EventPage } from '../pages/Event/EventPage';
import { EventsPage } from '../pages/Events/EventsPage';
import { LoginPage } from '../pages/Login/LoginPage';
import { RegisterPage } from '../pages/Register/Register';
import { RequireAuth } from './RequireAuth';
import { ERoutes } from './routes.enum';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      {/* public routes */}
      <Route path={ERoutes.PUBLIC_LOGIN} element={<LoginPage />} />
      <Route path={ERoutes.PUBLIC_REGISTER} element={<RegisterPage />} />
      <Route path={ERoutes.PUBLIC_EVENTS} element={<EventsPage />} />
      <Route path={`${ERoutes.PUBLIC_EVENTS}/:id`} element={<EventPage />} />
      <Route path={ERoutes.PUBLIC_UNAUTHORIZED} element={<div>UNAUTHORIZED PAGE</div>} />

      {/* private routes */}
      <Route element={<RequireAuth allowedRoles={[ERoles.USER]} />}>
        <Route path={ERoutes.PRIVATE_PROFILE} element={<div>PROFILE PAGE</div>} />
      </Route>

      <Route path='*' element={<div>NOT FOUND PAGE</div>} />
    </Route>,
  ),
);

export { router };
