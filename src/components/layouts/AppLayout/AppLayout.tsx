import { Outlet } from 'react-router-dom';
import { Header } from '../../navigation/Header/Header';

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export { AppLayout };
