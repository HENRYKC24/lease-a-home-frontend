/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { addLeaseToAPI } from '../redux/lease/lease';
import { login } from '../redux/user/user';

const LeaseForm = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const [date1, setDate1] = useState('');

  const [date2, setDate2] = useState('');

  const status = useSelector((state) => state.leaseReducer.lease_status);

  const userId = useSelector((state) => state.user.userId);

  const apartmentId = location.state.id;

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
      <h5 className="status">{status}</h5>
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
