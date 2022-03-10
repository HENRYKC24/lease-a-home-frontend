import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaBackward, FaForward } from 'react-icons/fa';
import { login } from '../redux/user/user';

const Home = () => {
  const dispatch = useDispatch();
  const apartmentss = useSelector((state) => state.apartment);
  const { apartments } = apartmentss;

  const [apart, setApart] = useState(
    apartments[0] ? apartments[0].slice(0, 3) : [],
  );

  const start = useRef(0);
  const multiplier = useRef(1);

  const pagination = (numPerPage, isForward, state) => {
    let result = [];
    if (isForward) {
      if (start.current < apartments[0].length) {
        result = apartments[0].slice(
          start.current,
          multiplier.current * numPerPage,
        );
        if (state === 'yes') {
          start.current += numPerPage;
          multiplier.current += 1;
        }
        setApart(() => result);
      } else {
        setApart(() => apart);
      }

      return false;
    } if (start.current >= numPerPage) {
      if (state === 'yes') {
        start.current -= numPerPage;
        multiplier.current -= 1;
      }
      result = apartments[0].slice(
        start.current,
        multiplier.current * numPerPage,
      );
      setApart(() => result);
    }
    return apart;
  };

  useEffect(() => {
    if (localStorage.getItem('someRandomVitalData')) {
      const { timestamp, mainUser } = JSON.parse(
        localStorage.getItem('someRandomVitalData'),
      );
      const now = new Date().getTime();
      const oneDayInMillSecs = 86400000;
      if (now - timestamp < 7 * oneDayInMillSecs) {
        dispatch(login(mainUser));
      } else {
        localStorage.removeItem('someRandomVitalData');
      }
    }
  }, []);

  useEffect(() => {
    if (apartments[0]) {
      setApart(() => pagination(3, true));
    }
  }, [apartments]);

  return (
    <div className="home-page">
      {!apart[0] ? (
        <h1>Loading</h1>
      ) : (
        <section data-testid="homepage">
          <h1 className="apartment-heading text-center mt-3 text-uppercase">
            Latest Home
          </h1>
          <div className="apartments-container">
            <FaBackward
              className="nav-button"
              onClick={() => {
                if (apartments[0]) {
                  pagination(3, false, 'yes');
                }
              }}
              type="button"
            />
            {apart.map((item) => (
              <div key={item.id}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/details"
                  state={{ id: item.id }}
                >
                  <div className="homepage-card">
                    <img
                      className="apartment-image hover_effect center-block"
                      src={item.image}
                      alt={item.name}
                    />
                    <h4 className="my-2 text-center apartmentname">{item.name}</h4>
                    <p className="description font-weight-light text-center ms-3">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            <FaForward
              className="nav-button"
              onClick={() => {
                if (apartments[0]) {
                  if (start.current === 0) {
                    start.current += 3;
                    multiplier.current += 1;
                  }
                  pagination(3, true, 'yes');
                  if (start.current + 3 > apartments[0].length) {
                    start.current -= 3;
                    multiplier.current -= 1;
                  }
                }
              }}
              type="button"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
