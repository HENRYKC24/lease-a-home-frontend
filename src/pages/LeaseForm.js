/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { addLeaseToAPI } from '../redux/lease/lease';
import { login } from '../redux/user/user';
import fetchApartments from '../redux/apartment/apartment';
import persistLogin from '../helpers/persistLogin';

const LeaseForm = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const { apartment, user } = useSelector((state) => state);
  const { apartments } = apartment;
  const { userId } = user;

  const apartmentId = location.state.id;
  const apartmentToBook = apartments[0]
    ? apartments[0].find((each) => each.id === apartmentId) : [];

  const { reservation_expiry_date: expiryDate } = apartmentToBook;

  const [date1, setDate1] = useState(expiryDate);
  let [year, month, day] = date1.split('-');

  if (Number(month) === 12) {
    month = '01';
    year = Number(year) + 1;
    day = day.toString();
  } else {
    month = Number(month) + 1;
    if (month.toString().length === 1) {
      month = `0${month}`;
    }
  }

  const day2Value = `${year}-${month}-${day}`;

  const [date2, setDate2] = useState(day2Value);

  const [lease] = useState({
    from: '',
    to: '',
    cancelled: false,
    userId,
    apartmentId,
  });

  const submitLease = () => {
    dispatch(addLeaseToAPI({
      ...lease,
      from: date1,
      to: date2,
      userId,
    }));
  };

  const details = {
    heading: 'Lease a home/apartment',
    text: 'Lease-A-Home provides you with a variety of homes and apartment. Ranging from two bedroom apartments to six bedrooms homes. Some located in the surburb and some in the city, feel free to pick a place to call home that fit all your needs.',
  };

  useEffect(() => {
    if (localStorage.getItem('someRandomVitalData')) {
      const { timestamp, mainUser } = JSON.parse(localStorage.getItem('someRandomVitalData'));
      const now = new Date().getTime();
      const oneDayInMillSecs = 86400000;
      if (now - timestamp < (7 * oneDayInMillSecs)) {
        dispatch(login(mainUser));
      } else {
        localStorage.removeItem('someRandomVitalData');
      }
    }
  }, []);

  return (
    <div className="lease-form" data-testid="leaseForm">
      <div id="color-overlay" />
      <h1 className="lease-text">{details.heading}</h1>
      <hr />
      <p className="lease-text">{details.text}</p>
      <form className="lease-text the-form">
        <div className="datetime mt-3">
          <h6>from: </h6>
          <input type="date" id="date" className="form-control fc" onChange={(e) => setDate1(e.target.value)} value={date1} />
        </div>
        <div className="datetime mt-3">
          <h6>to: </h6>
          <input type="date" id="date" className="form-control fc" onChange={(e) => setDate2(e.target.value)} value={date2} />
        </div>
        <button type="button" className="mt-3 form-control fc submit-button" onClick={submitLease}><Link to="/my_leases" className="text-white">Book Now</Link></button>
      </form>
    </div>
  );
};

export default LeaseForm;
