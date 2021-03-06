import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaBackward, FaForward } from 'react-icons/fa';
import { login } from '../redux/user/user';
import persistLogin from '../helpers/persistLogin';

const Home = () => {
  const dispatch = useDispatch();
  const apartmentss = useSelector((state) => state.apartment);
  const { apartments } = apartmentss;

  const [apart, setApart] = useState(
    apartments[0] ? apartments[0].slice(0, 3) : [],
  );

  const start = useRef(0);
  const multiplier = useRef(1);

  const [isMobile, setIsmobile] = useState(false);

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
    persistLogin(login, dispatch);
  }, []);

  useEffect(() => {
    if (apartments[0]) {
      setApart(() => pagination(3, true));
    }
  }, [apartments]);

  window.onresize = () => {
    if (window.innerWidth < 1150) {
      setIsmobile(() => true);
    } else {
      setIsmobile(() => false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1150) {
      setIsmobile(() => true);
    } else {
      setIsmobile(() => false);
    }
  }, []);

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
            <div className={isMobile ? 'nav-box' : ''}>
              <FaBackward
                className="nav-button"
                onClick={() => {
                  if (apartments[0]) {
                    pagination(3, false, 'yes');
                  }
                }}
                type="button"
              />
              {isMobile && (
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
              )}
            </div>
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
            <div className={isMobile ? 'nav-box' : ''}>
              {isMobile && (
              <FaBackward
                className="nav-button"
                onClick={() => {
                  if (apartments[0]) {
                    pagination(3, false, 'yes');
                  }
                }}
                type="button"
              />
              )}
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
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
