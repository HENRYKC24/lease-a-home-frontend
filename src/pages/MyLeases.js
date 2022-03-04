import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMyLeasesAction } from '../redux/lease/lease';

const MyLeases = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyLeasesAction());
  }, []);
  return (
    <div className="container p-5">
      <div className="row g-5 d-flex justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
          <div className="card w-90">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top " alt="..." />
            <div className="card-body">
              <p className="card-text">
                Lorem Ipsum Depricano soto lore delsmu sewds

              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <Link to="/" className="btn text-info">More Details</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
          <div className="card w-90">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top " alt="..." />
            <div className="card-body">
              <p className="card-text">
                Lorem Ipsum Depricano soto lore delsmu sewds

              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <Link to="/" className="btn text-info">More Details</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
          <div className="card w-90">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top " alt="..." />
            <div className="card-body">
              <p className="card-text">
                Lorem Ipsum Depricano soto lore delsmu sewds

              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <Link to="/" className="btn text-info">More Details</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
          <div className="card w-90">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top " alt="..." />
            <div className="card-body">
              <p className="card-text">
                Lorem Ipsum Depricano soto lore delsmu sewds

              </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <Link to="/" className="btn text-info">More Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLeases;
