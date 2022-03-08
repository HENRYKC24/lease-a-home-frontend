import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMyLeasesAction } from '../redux/lease/lease';
import { login } from '../redux/user/user';

const MyLeases = () => {
  const dispatch = useDispatch();
  const { myLeases, user } = useSelector((state) => state);
  const { loading, leases, error } = myLeases;
  const [id, setId] = useState('');


  useEffect(() => {
    if (user.userId) {
      dispatch(getMyLeasesAction(user.userId));
    }
  }, [user]);

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

  const handleSetId = (lease) => {
    setId(lease);
  };

  const handleDeleteLease = (id) => {
    dispatch(deleteLeaseAction(id));
    window.location.reload();
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
              <h5 className="modal-title text-center" id="exampleModalLabel">Are You Sure?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
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
    user ? (
      <div className="container p-5">
        <div className="row g-5 d-flex justify-content-center">
          {error && <div className="alert alert-danger">error.message</div>}
          {!loading && leases.length === 0 && <h1 className="text-center text-info">You currently have no leases</h1>}
          {
        loading ? <div> loading ...</div> : leases.map((lease) => (
          <div key={lease.lease_details.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-12">
            <div className="card w-90">
              <img src={lease.lease_details.image} className="card-img-top " alt="..." />
              <div className="card-body">
                <p className="card-text">
                  {lease.apartment_details.name}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <Link to={`/my_leases/${lease.lease_details.id}`} className="btn text-info">More Details</Link>
              </div>
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
