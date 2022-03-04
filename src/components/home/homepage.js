import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const apartmentss = useSelector((state) => state.apartment);
  const { apartments } = apartmentss;
  console.log(apartments, 'hello');
  if (!apartments[0]) {
    return (
      <h1>Loading</h1>
    );
  }
 
};
