import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context-providers/auth/authProvider';
import { router } from './routing';
import 'antd/dist/reset.css';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export { App };
