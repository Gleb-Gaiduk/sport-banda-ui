import { Link } from 'react-router-dom';
import { ERoutes } from '../../../routing/routes.enum';
import './Header.scss';

function Header() {
  return (
    <header className='SbHeader'>
      HEADER COMPONENT
      <nav>
        <ul>
          <li>
            <Link to={ERoutes.PUBLIC_EVENTS}>Events</Link>
          </li>
          <li>
            <Link to={ERoutes.PRIVATE_PROFILE}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
