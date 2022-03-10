import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import cx from 'classnames';
import colorScheme from '../colorScheme';
import style from './signup.module.css';
import { hitAPIWithSigninDetails } from '../redux/user/user';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loggedIn } = state.user;
  const {
    formHeader,
    form,
    formGroup,
    formControl,
    label,
    btn,
    h2,
    or,
    line,
    orGroup,
    noSignedInMessage,
  } = style;

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [loading, setIsloading] = useState(false);
  const [color] = useState('#ffffff');

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const [signedInSuccess, setSignedInSuccess] = useState(loggedIn);

  const handleInput = (event) => {
    setSignedInSuccess(false);
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    setSignedInSuccess(false);
    const { email, password } = input;
    if (password && email) {
      event.preventDefault();
      dispatch(hitAPIWithSigninDetails({ email, password }));
      setIsloading(() => true);
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (loggedIn === 'in') {
      navigate('/', { replace: true });
    }
    if (loggedIn === 'err') {
      setSignedInSuccess(loggedIn);
      setIsloading(() => false);
    }
  }, [state]);

  return (
    <form className={cx(colorScheme.blue, form)}>
      <div style={{ backgroundColor: colorScheme.blue }} className={cx(formHeader)}>
        <h2 className={h2}>Let&apos;s Login</h2>
      </div>

      <div>
        <div className={cx('form-group', formGroup)}>
          {signedInSuccess === 'err' && <p className={noSignedInMessage}>Email/password incorrect or bad connection!</p>}
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
      </div>

      <div className="login-buttons">
        <div className={cx('form-group', formGroup)}>
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: colorScheme.blue }}
            type="submit"
            className={btn}
          >
            {loading
              ? <ScaleLoader color={color} loading={loading} css={override} size={150} />
              : 'Login'}
          </button>
        </div>

        <div className={cx('form-group', orGroup)}>
          <hr className={line} />
          <p className={or}>OR</p>
          <hr className={line} />
        </div>

        <div className={cx('form-group', formGroup)}>
          <NavLink to="/sign_up">
            <button
              style={{ backgroundColor: colorScheme.blue }}
              type="button"
              className={btn}
            >
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </form>
  );
};

export default Login;
