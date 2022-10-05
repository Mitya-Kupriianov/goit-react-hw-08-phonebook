import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import c from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={c.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={c.label}>
        Username
        <input className={c.input} type="text" name="name" />
      </label>
      <label className={c.label}>
        Email
        <input className={c.input} type="email" name="email" />
      </label>
      <label className={c.label}>
        Password
        <input className={c.input} type="password" name="password" />
      </label>
      <button className={c.btn} type="submit">
        Register
      </button>
    </form>
  );
};
