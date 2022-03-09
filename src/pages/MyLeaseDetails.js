import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleLeaseAction } from '../redux/lease/lease';
import { login } from '../redux/user/user';

const MyLeaseDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { leaseDetails, user } = useSelector((state) => state);
  // console.log(user, 'The almight user');
  const { lease, loading, err: error } = leaseDetails;

  useEffect(() => {
    if (user.userId) {
      dispatch(getSingleLeaseAction(params.lease_id, user.userId));
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
                  <h5 className="card-title text-center">
                    {lease.leaseDetails.name}
                  </h5>
                  <p className="text-center">Lorem Ipsum Depricano lasander Lorem Ipsum Depricano </p>

                  <table className="table">
                    <tbody>
                      <tr>
                        <td />
                        <td>City</td>
                        <td> - </td>
                        <td />
                        <td>{lease.apartmentDetails.name}</td>
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

        <h2 className="text-center text-info  my-5">Interiors</h2>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2 g-2 g-lg-3 mb-5 d-flex justify-content-center">
          { loading ? '' : (lease.apartmentDetails.interior.map((interior) => (
            <div key={interior} className="col ">
              <div className="p-3 border bg-light h-75 w-75">
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
