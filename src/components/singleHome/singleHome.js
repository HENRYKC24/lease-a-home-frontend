import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const apartmentss = useSelector((state) => state.apartment);
  const { apartment } = apartmentss;
  const {
    name, description, image, maintenance_fee: maintenance,
    monthly_rent: rent, city, reservation_expiry_date: reservation,
    interior,
  } = apartment;

  if (!apartment) {
    return (
      <h1>Loading</h1>
    );
  }
  return (
    <section>
      <div className="row">

        <div className="singlecard">
          <img className="singleapartment-image" src={image} alt={name} />
          <h4 className="my-2 text-center apartmentname">{name}</h4>
          <p className="singledescription font-weight-light text-center ms-3">
            {description}
          </p>

          <div className="text-center mt-5">
            <p>
              Reservation-Expiry-Date:
              {' '}
              {reservation}
            </p>
            <p>
              Maintenance-Fee:
              {' '}
              {maintenance}
            </p>
            <p>
              Monthly-Rent:
              {' '}
              {rent}
            </p>
            <p>
              City:
              {' '}
              {city}
            </p>
            <button className="btn btn-success book-apartment my-4" type="button">Book Apartment</button>
          </div>
        </div>
      </div>
      <div className="row m-3">
        {interior && interior.map((feature) => (
          <div key={feature.id}>
            <img className="feature" src={feature} alt={name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Detail;
