import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { getMyLeasesAction, deleteLeaseAction } from '../redux/lease/lease';
import { login } from '../redux/user/user';
import persistLogin from '../helpers/persistLogin';

const MyLeases = () => {
  const dispatch = useDispatch();
  const { myLeases, user } = useSelector((state) => state);
  const { loading, leases, error } = myLeases;
  const [id, setId] = useState('');

  useEffect(() => {
    if (user.userId) {
      dispatch(getMyLeasesAction(user.userId));
    }
  }, [user, dispatch]);

  useEffect(() => {
    persistLogin(login, dispatch);
  }, []);

  const handleSetId = (lease) => {
    setId(lease);
  };

  const handleDeleteLease = (id) => {
    if (user.userId) {
      dispatch(deleteLeaseAction(id));
      setTimeout(() => {
        dispatch(getMyLeasesAction(user.userId));
      }, 350);
    }
  };

  const deleteModal = (leaseId) => (
    <>
      <RiDeleteBin6Line onClick={() => handleSetId(leaseId)} className=" delete-lease text-danger border-0 bg-transparent h2" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">Are You Sure?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" onClick={() => handleDeleteLease(id)} className="btn  btn-danger " data-bs-dismiss="modal">Yes, Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    user ? (
      <div className="container p-5 d-flex justify-content-center">
        <div className="row g-5 d-flex justify-content-center">
          {error && <div className="alert alert-danger">error.message</div>}
          {!loading && leases.length === 0 && <h1 className="text-center text-info">You currently have no leases</h1>}
          {
        loading ? <div> loading ...</div> : leases.map((lease) => (
          <div key={lease.lease_details.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12 single-lease">
            <img src={lease.apartment_details.image} className="lease-img card-img-top h-40" alt="..." />
            <div className="card-body">
              <p className="card-text">
                {lease.apartment_details.name}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to={`/my_leases/${lease.lease_details.id}`} className="btn text-info">View</Link>
              {deleteModal(lease.lease_details.id)}
            </div>
          </div>
        ))
      }
        </div>
      </div>
    ) : <p>Please, wait...</p>
  );
};

export default MyLeases;
