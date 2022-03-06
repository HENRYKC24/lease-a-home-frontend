import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLeaseAction, getMyLeasesAction } from '../redux/lease/lease';

const DeleteLeases = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
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

  const handleSetId = (lease) => {
    setId(lease);
  };

  const handleDeleteLease = (id) => {
    dispatch(deleteLeaseAction(id));
  };

  const deleteModal = (leaseId) => (
    <>
      <button type="button" onClick={() => handleSetId(leaseId)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Delete
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" onClick={() => handleDeleteLease(id)} className="btn btn-danger">Yes, Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
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
                  {' '}
                  {deleteModal(lease.id)}

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
