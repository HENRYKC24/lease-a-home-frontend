import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import cx from 'classnames';
import colorScheme from '../colorScheme';
import style from './signup.module.css';
import hitAPIWithSignupDetails, { userReducer, login } from '../redux/user/user';

const SignupPage = () => {
  const navigate = useNavigate();

  function goToLogin() {
    navigate('/login', { replace: true });
  }

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const [loading, setIsloading] = useState(false);
  const [color] = useState('#ffffff');
  const up = useRef(false);

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
  const [signUpSuccess, setSignUpSucess] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;
    if ((missmatch === 'Password mismatch!' || missmatch === 'Password too short!')
    && (name === 'password' || name === 'confirmPwd')) setMissmatch(() => '');
    if (signUpSuccess === 'err' && (name === 'email')) setSignUpSucess(() => '');
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    setSignUpSucess(() => '');
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
      setIsloading(() => true);
      dispatch(hitAPIWithSignupDetails(input));
      up.current = true;
    }
    return true;
  };

  useEffect(() => {
    setIsloading(() => false);
    if (signedUp === 'up' && up.current) {
      up.current = false;
      setSignUpSucess(() => true);
      setTimeout(() => {
        setSignUpSucess(() => '');
        dispatch(login({
          name: '',
          email: '',
          loggedIn: 'out',
          userId: '',
          signedUp: '',
        }));
        goToLogin();
      }, 3000);
    }
    setSignUpSucess(() => signedUp);
  }, [state]);

  useEffect(() => () => {
    setSignUpSucess(() => '');
    return userReducer({}, login({
      name: '',
      email: '',
      loggedIn: 'out',
      userId: '',
      signedUp: '',
    }));
  }, []);

  return (
    <form className={cx(colorScheme.green, form)}>
      <div style={{ backgroundColor: colorScheme.blue }} className={cx(formHeader)}>
        <h2 className={h2}>Let&apos;s Sign Up</h2>
      </div>

      <div className={cx('form-group', formGroup)}>
        {missmatch && <p className={error}>{missmatch}</p>}
        {signUpSuccess === 'up' && <p className={signedUpMessage}>You have succeesfully signed up!</p>}
        {signUpSuccess === 'err' && <p className={noSignedUpMessage}>Email already exists or bad connection!</p>}
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
          {loading
            ? <ScaleLoader color={color} loading={loading} css={override} size={150} />
            : 'Sign Up'}

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
