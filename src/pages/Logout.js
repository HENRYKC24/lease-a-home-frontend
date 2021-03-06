import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import colorScheme from '../colorScheme';
import style from './signup.module.css';
import { hitAPIWithLogoutDetails } from '../redux/user/user';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loggedIn } = user;

  const [show, setShow] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    overlay,
    cancel,
    yes,
    btnWrapper,
    cancelBtn,
    yesBtn,
    overlayInner,
    areYouSure,
  } = style;

  const [loading, setIsloading] = useState(false);
  const [color] = useState('#ffffff');

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const handleLogout = () => {
    const { authorization } = JSON.parse(localStorage.getItem('someRandomVitalData'));
    dispatch(hitAPIWithLogoutDetails({ userAuth: authorization }));
    setIsLoggedIn(() => true);
    setIsloading(() => true);
  };

  const handleCancel = () => {
    setShow(() => false);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (loggedIn === 'out' && isLoggedIn) {
      setShow(() => false);
      navigate('/', { replace: true });
    }
  }, [user, setIsLoggedIn]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('stop-scrolling');
    return () => {
      document.body.classList.remove('stop-scrolling');
    };
  }, []);

  return show ? (
    <div className={overlay}>
      <div className={overlayInner}>
        <p className={areYouSure}>Are you sure you want to log out?</p>
        <div className={btnWrapper}>
          <div className={cancel}>
            <button
              onClick={handleCancel}
              style={{ backgroundColor: colorScheme.blue }}
              type="submit"
              className={cancelBtn}
            >
              Cancel
            </button>
          </div>

          <div className={yes}>
            <button
              onClick={handleLogout}
              style={{ backgroundColor: colorScheme.blue }}
              type="submit"
              className={yesBtn}
            >
              {loading
                ? <ScaleLoader color={color} loading={loading} css={override} size={150} />
                : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Logout;
