import React, { useState } from 'react';
import cx from 'classnames';
import colorScheme from '../../colorScheme';
import style from './signup.module.css';

const Login = () => {
  const {
    formHeader,
    form,
    formGroup,
    formControl,
    label,
    btn,
    // h2,
    p,
    or,
    line,
    orGroup,
  } = style;

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    const { email, password } = input;
    if (password && email) {
      event.preventDefault();
      console.log(input, 'input state>>>>');
    }
    return true;
  };

  return (
    <form className={cx(colorScheme.blue, form)}>
      <div style={{ backgroundColor: colorScheme.blue }} className={cx(formHeader)}>
        {/* <h2 className={h2}>Login</h2> */}
        <p className={p}>Fill out this form to log in!</p>
      </div>

      <div className={cx('form-group', formGroup)}>
        <label style={{ color: colorScheme.textPale }} className={label} htmlFor="email">
          Email Address
          <span> *</span>
          <input
            onChange={handleInput}
            value={input.email}
            type="email"
            className={cx('form-control', formControl)}
            name="email"
            id="email"
            required="required"
          />
        </label>
      </div>

    </form>
  );
};

export default Login;
