import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLeaseToAPI } from '../redux/lease/lease';

const LeaseForm = () => {
  const dispatch = useDispatch();

  const [date1, setDate1] = useState('');

  const [date2, setDate2] = useState('');

  const userId = useSelector((state) => state.user.userId);
  const status = useSelector((state) => state.leaseReducer.lease_status);
  console.log('status', status);
  console.log('id', userId);

  const apartmentId = 1;

  const [lease] = useState({
    from: '',
    to: '',
    cancelled: false,
    userId,
    apartmentId,
  });

  const submitLease = () => {
    const value = dispatch(addLeaseToAPI({
      ...lease,
      from: date1,
      to: date2,
    }));
    console.log(value);
  };

  const details = {
    heading: 'Lease a home/apartment',
    text: 'There are 15 different homes and apartment listed. Ranging from two bedroom apartments to six bedrooms homes. Some located in the surburb and some in the city, feel free to pick a place to call home that fit all your needs',
  };

  return (
    <div className="lease-form">
      <div id="color-overlay" />
      <p>{status}</p>
      <h1 className="lease-text">{details.heading}</h1>
      <hr className="lease-text" />
      <p className="lease-text">{details.text}</p>
      <form className="lease-text">
        <div className="datetime">
          <input type="datetime-local" id="date" onChange={(e) => setDate1(e.target.value)} value={date1} />
        </div>
        <div className="datetime">
          <input type="datetime-local" id="date" onChange={(e) => setDate2(e.target.value)} value={date2} />
        </div>
        <button type="button" className="btn btn-primary" onClick={submitLease}>Book Now</button>
      </form>
    </div>
  );
};

export default LeaseForm;
