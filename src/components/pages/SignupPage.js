import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import colorScheme from '../../colorScheme';
import style from './signup.module.css';
import hitAPIWithSignupDetails from '../../redux/user/user';

const SignupPage = () => {
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
    // p,
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

  
};

export default SignupPage;
