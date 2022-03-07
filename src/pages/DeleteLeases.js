import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLeaseAction, getMyLeasesAction } from '../redux/lease/lease';

const DeleteLeases = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const { myLeases } = useSelector((state) => state);
  const { loading, leases, error } = myLeases;

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
        {error && <div className="alert alert-danger">error.message</div>}
        {
          loading ? 'loading' : leases.map((lease) => (
            <div key={lease.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
              <div className="card w-90">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top " alt="..." />
                <div className="card-body">
                  <p>{lease.apartment_details.name}</p>

                </div>

                <div className="card-footer d-flex justify-content-center">
                  {' '}
                  {deleteModal(lease.id)}

                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default DeleteLeases;
