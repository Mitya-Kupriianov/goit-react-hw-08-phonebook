import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import c from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={c.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={c.label}>
        Email
        <input className={c.input} type="email" name="email" />
      </label>
      <label className={c.label}>
        Password
        <input className={c.input} type="password" name="password" />
      </label>
      <button className={c.btn} type="submit">
        Log In
      </button>
    </form>
  );
};
