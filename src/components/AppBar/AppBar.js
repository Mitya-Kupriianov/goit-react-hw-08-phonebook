import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn && token ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
