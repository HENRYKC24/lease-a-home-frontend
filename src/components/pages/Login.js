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

};

export default Login;
