import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { login } from '../../redux/user/user';
import persistLogin from '../../helpers/persistLogin';

const Detail = () => {
  const dispatch = useDispatch();
  const apartmentss = useSelector((state) => state.apartment);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const { id } = location.state;
  const apartment = apartmentss.apartments;
  const apartmentMain = apartment.length && apartment[0].filter((one) => one.id === id);
  const {
    name, description, image, maintenance_fee: maintenance,
    monthly_rent: rent, city, reservation_expiry_date: reservation,
    interior,
  } = apartmentMain[0] || {
    name: '', description: '', image: '', maintenance_fee: '', monthly_rent: '', reservation_expiry_date: '', interior: [],
  };

  useEffect(() => {
    persistLogin(login, dispatch);
  }, []);

  if (!apartment) {
    return (
      <h1>Loading</h1>
    );
  }

  const total = parseInt(rent, 10) + parseInt(maintenance, 10);
  return (
    apartmentMain ? (
      <section className="singleapartment-container">
        <div className="singlecard">
          <div className="image-container">
            <img className="singleapartment-image" src={image} alt={name} />
          </div>
          <div className="singleapartment-details text-center">
            <h3 className="my-2 text-center apartmentname">{name}</h3>
            <p className="singledescription font-weight-light text-center ms-3">
              {description}
            </p>
            <p>
              City:
              {' '}
              {city}
            </p>
            <p className="reservation">
              Available From:
              {' '}
              {reservation}
            </p>
            <p>
              Maintenance Fee:
              {' '}
              $
              {maintenance}
            </p>
            <p>
              Monthly Rent:
              {' '}
              $
              {rent}
            </p>
            <p>
              Total Fee/Month:
              {' '}
              $
              {total}
            </p>
            <button className="btn btn-success book-apartment my-4" type="button">
              <Link style={{ textDecoration: 'none', color: 'white' }} to={user.userId ? '/lease_form' : '/login'} state={{ id }}>Book Apartment</Link>
            </button>
          </div>
        </div>
        <h4 className="my-2 text-center apartmentname">Interior</h4>
        <div className="interior-card">
          {interior && interior.map((feature) => (
            <div key={Math.random()}>
              <img className="feature" src={feature} alt={name} />
            </div>
          ))}
        </div>
      </section>
    ) : <p>Please, wait...</p>
  );
};

export default Detail;