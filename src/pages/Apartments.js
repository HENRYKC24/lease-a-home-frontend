import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/user';

const Apartments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('leaseAHomeUser')) dispatch(login(JSON.parse(localStorage.getItem('leaseAHomeUser'))));
  }, []);
  return (
    <h1 className="random">Apartments</h1>
  );
};

export default Apartments;
