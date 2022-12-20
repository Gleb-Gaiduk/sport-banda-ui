import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context-providers/auth/authProvider';
import { router } from './routing';

function App() {
  return (
    <AuthProvider>
      <div className='light-theme'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export { App };
