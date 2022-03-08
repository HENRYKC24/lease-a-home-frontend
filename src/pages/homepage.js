import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { singleApartments } from '../redux/apartment/apartment';
import { login } from '../redux/user/user';

const Home = () => {
  const dispatch = useDispatch();
  const apartmentss = useSelector((state) => state.apartment);
  const { apartments } = apartmentss;
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
    !apartments[0] ? <h1>Loading</h1> : (
      <section>
        <h1 className="apartment-heading text-center mt-3 text-uppercase">Latest Home</h1>
        <div className="row">
          {
    apartments[0].map((item) => (
      <div key={item.id} className="col-12 col-md-6 col-lg-4">
        <Link style={{ textDecoration: 'none' }} to={`${item.id}`} className="m-3" onClick={() => dispatch(singleApartments(item.id))}>
          <div className="homepage-card mx-3">
            <img className="apartment-image hover_effect center-block" src={item.image} alt={item.name} />
            <h4 className="my-2 text-center apartmentname">{item.name}</h4>
            <p className="description font-weight-light text-center ms-3">
              {item.description}
            </p>
          </div>
        </Link>
      </div>
    ))
  }
        </div>
      </section>
    )
  );
};

export default Home;
