import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import c from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={c.wrapper}>
      <p className={c.username}>Welcome, {user?.name}</p>
      <button
        className={c.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
