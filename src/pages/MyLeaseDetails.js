import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleLeaseAction } from '../redux/lease/lease';
import { login } from '../redux/user/user';
import persistLogin from '../helpers/persistLogin';

const MyLeaseDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { leaseDetails, user } = useSelector((state) => state);
  const { lease, loading, err: error } = leaseDetails;

  useEffect(() => {
    if (user.userId) {
      dispatch(getSingleLeaseAction(params.lease_id, user.userId));
    }
  }, [user]);

  useEffect(() => {
    persistLogin(login, dispatch);
  }, []);

  return (
    lease ? (
      <div className="container">
        {error && (
        <p className="alert alert-danger">
          {error}
        </p>
        ) }
        {loading ? 'loading' : (
          <div className=" card mb-3 mt-5">
            <div className="row g-0">
              <div className="col-md-5">
                <img src={lease.apartmentDetails.image} className="h-100 img-fluid rounded-start" alt="..." />
                {' '}

              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title text-info text-center">
                    {lease.apartmentDetails.name}
                  </h3>
                  <p className="text-center">
                    {' '}
                    {lease.apartmentDetails.description}
                    {' '}
                  </p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td />
                        <td>City</td>
                        <td> - </td>
                        <td />
                        <td>{lease.apartmentDetails.city}</td>
                      </tr>
                      <tr>
                        <td />

                        <td>Monthly Rent</td>
                        <td> - </td>
                        <td />
                        <td>
                          $
                          {lease.apartmentDetails.monthly_rent}
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td>Maintenance Fee</td>
                        <td> - </td>
                        <td />
                        <td>
                          $
                          {lease.apartmentDetails.maintenance_fee}
                        </td>
                      </tr>
                      <tr>
                        <td />

                        <td>Expiry Date</td>
                        <td> - </td>
                        <td />
                        <td>{lease.apartmentDetails.reservation_expiry_date}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        <h4 className="text-center text-info  my-5">Interiors</h4>
        <div className="interior-card">
          { loading ? '' : (lease.apartmentDetails.interior.map((interior) => (
            <div key={interior} className="col d-flex justify-content-center mb-3 row g-5">
              <div className=" border bg-light h-80 w-100 ">
                <img src={interior} className="img-fluid rounded-start h-100 w-100 align-center" alt="..." />
              </div>
            </div>
          )))}
        </div>
      </div>
    ) : <p>Please, wait...</p>
  );
};

export default MyLeaseDetails;
