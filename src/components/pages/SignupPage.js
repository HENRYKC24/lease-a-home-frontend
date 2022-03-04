import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import cx from 'classnames';
import colorScheme from '../../colorScheme';
import style from './signup.module.css';
import hitAPIWithSignupDetails from '../../redux/user/user';

const SignupPage = () => {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate('/', { replace: true });
  }

  const {
    formHeader,
    form,
    formGroup,
    formControl,
    label,
    btn,
    h2,
    signedUpMessage,
    noSignedUpMessage,
    error,
    orGroup,
    line,
    or,
  } = style;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const { signedUp } = state;
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPwd: '',
  });

  const [missmatch, setMissmatch] = useState('');
  const [signUpSuccess, setSignUpSucess] = useState(signedUp);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'password' || name === 'confirmPwd') setMissmatch(() => '');
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    setSignUpSucess(() => false);
    const {
      name,
      email,
      password,
      confirmPwd,
    } = input;
    if (name && email && password && confirmPwd) {
      event.preventDefault();
      if (password !== confirmPwd) {
        return setMissmatch(() => 'Password mismatch!');
      }
      if (password.length < 6) {
        return setMissmatch(() => 'Password too short!');
      }
      dispatch(hitAPIWithSignupDetails(input));
    }
    return true;
  };

  useEffect(() => {
    setSignUpSucess(() => signedUp);
    if (signedUp === 'up') {
      setTimeout(() => goToHomePage(), 3000);
    }
  }, [state]);

  return (
    <form className={cx(colorScheme.green, form)}>
      <div style={{ backgroundColor: colorScheme.blue }} className={cx(formHeader)}>
        <h2 className={h2}>Let&apos;s Sign Up</h2>
      </div>

      <div className={cx('form-group', formGroup)}>
        {missmatch && <p className={error}>{missmatch}</p>}
        {signUpSuccess === 'up' && <p className={signedUpMessage}>You have succeesfully signed up!</p>}
        {signUpSuccess === 'down' && <p className={noSignedUpMessage}>Email already exists or bad connection!</p>}
        <label style={{ color: colorScheme.textPale }} className={label} htmlFor="name">
          Username
          <span> *</span>
          <input
            onChange={handleInput}
            value={input.name}
            type="text"
            className={cx('form-control', formControl)}
            name="name"
            id="name"
            required="required"
          />
        </label>
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

      <div className={cx('form-group', formGroup)}>
        <label style={{ color: colorScheme.textPale }} className={label} htmlFor="password">
          Password
          <span> *</span>
          <input
            onChange={handleInput}
            value={input.password}
            type="password"
            className={cx('form-control', formControl)}
            name="password"
            id="password"
            required="required"
          />
        </label>
      </div>

      <div className={cx('form-group', formGroup)}>
        <label style={{ color: colorScheme.textPale }} className={label} htmlFor="confirm_password">
          Confirm Password
          <span> *</span>
          <input
            onChange={handleInput}
            value={input.confirmPwd}
            type="password"
            className={cx('form-control', formControl)}
            name="confirmPwd"
            id="confirm_password"
            required="required"
          />
        </label>
      </div>

      <div className={cx('form-group', formGroup)}>
        <button
          onClick={handleSubmit}
          style={{ backgroundColor: colorScheme.blue }}
          type="submit"
          className={btn}
        >
          Sign Up
        </button>
      </div>

      <div className={cx('form-group', orGroup)}>
        <hr className={line} />
        <p className={or}>OR</p>
        <hr className={line} />
      </div>

      <div className={cx('form-group', formGroup)}>
        <NavLink to="/login">
          <button
            style={{ backgroundColor: colorScheme.blue }}
            type="button"
            className={btn}
          >
            Login
          </button>
        </NavLink>
      </div>
    </form>
  );
};

export default SignupPage;
