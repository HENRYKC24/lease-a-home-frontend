/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const LeaseForm = () => {
  const [date, setDate] = useState();

  const details = {
    heading: 'Lease a home/apartment',
    text: 'There are 15 different homes and apartment listed. Ranging from two bedroom apartments to six bedrooms homes. Some located in the surburb and some in the city, feel free to pick a place to call home that fit all your needs',
  };

  return (
    <div className="lease-form">
      <h1>{details.heading}</h1>
      <hr />
      <p>{details.text}</p>
      <form>
        <div className="mb-3">
          <label htmlFor="textInput" className="form-label">Name</label>
          <input type="text" id="textInput" className="form-control" placeholder="Your name" value="User name" />
        </div>
        <div className="mb-3">
          <label htmlFor="select" className="form-label">Apartment</label>
          <select id="select" className="form-select">
            <option selected>Selected apartment</option>
            <option>Wavy</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="select" className="form-label">City</label>
          <select id="select" className="form-select">
            <option>Lusaka</option>
          </select>
        </div>
        <div className="datetime">
          <input type="datetime-local" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
};

export default LeaseForm;
