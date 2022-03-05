import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyLeasesAction } from '../redux/lease/lease';

const DeleteLeases = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('state ==>', state);

  const leases = [{
    id: '1', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Beach House', description: 'Lorem Isum depreca acono deaach',
  }, {
    id: '2', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Farm House', description: 'Lorem Isum depreca acono deaach',
  }, {
    id: '3', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Safe House', description: 'Lorem Isum depreca acono deaach',
  }, {
    id: '4', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Guest House', description: 'Lorem Isum depreca acono deaach',
  }];

  useEffect(() => {
    dispatch(getMyLeasesAction());
  }, []);

  const handleDeleteLease = (id) => {
    console.log('lease-id', id);
    // dispatch(deleteLeaseAction(id));
  };
  return (
    <div className="container p-5">
      <div className="row g-5 d-flex justify-content-center">
        {
          leases.length > 0 ? leases.map((lease) => (
            <div key={lease.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
              <div className="card w-90">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top " alt="..." />
                <div className="card-body">
                  <p>{lease.name}</p>

                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button type="submit" onClick={() => handleDeleteLease(lease.id)} className="btn btn-warning">Delete</button>
                </div>
              </div>
            </div>
          )) : ('less')
        }

      </div>
    </div>
  );
};

export default DeleteLeases;
