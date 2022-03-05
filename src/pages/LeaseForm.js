/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLeaseToAPI } from '../redux/lease/lease';

const LeaseForm = () => {
  const dispatch = useDispatch();

  const [date1, setDate1] = useState('');

  const [date2, setDate2] = useState('');

  const userId = useSelector((state) => state.user.userId);
  const status = useSelector((state) => state.leaseReducer.lease_status);

  const apartmentId = 1;

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
    }));
  };

  const details = {
    heading: 'Lease a home/apartment',
    text: 'Lease-A-Home provides you with a variety of homes and apartment. Ranging from two bedroom apartments to six bedrooms homes. Some located in the surburb and some in the city, feel free to pick a place to call home that fit all your needs.',
  };

  return (
    <div className="lease-form">
      <div id="color-overlay" />
      <p>{status}</p>
      <h1 className="lease-text">{details.heading}</h1>
      <hr />
      <p className="lease-text">{details.text}</p>
      <form className="lease-text the-form">
        <div className="datetime mt-3">
          <h6>from: </h6>
          <input type="date" id="date" className="form-control" onChange={(e) => setDate1(e.target.value)} value={date1} />
        </div>
        <div className="datetime mt-3">
          <h6>to: </h6>
          <input type="date" id="date" className="form-control" onChange={(e) => setDate2(e.target.value)} value={date2} />
        </div>
        <button type="button" className="mt-3 form-control submit-button" onClick={submitLease}>Book Now</button>
      </form>
    </div>
  );
};

export default LeaseForm;
