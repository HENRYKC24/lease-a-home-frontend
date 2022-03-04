import React from 'react';
import interior1 from '../images/interior1.jpeg';
import interior2 from '../images/interior2.jpg';
import interior3 from '../images/interior3.jpeg';

const MyLeaseDetails = () => (
  <div className="container">
    <div className=" card mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-5">
          <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-100 img-fluid rounded-start" alt="..." />
          {' '}

        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title text-center">Apartment Name</h5>
            <p className="text-center">Lorem Ipsum Depricano lasander Lorem Ipsum Depricano lasander</p>

            <table className="table">
              <tbody>
                <tr>
                  <td />
                  <td>City</td>
                  <td> - </td>
                  <td />
                  <td>Jos</td>
                </tr>
                <tr>
                  <td />

                  <td>Monthly Rent</td>
                  <td> - </td>
                  <td />
                  <td>$500</td>
                </tr>
                <tr>
                  <td />
                  <td>Maintenance Fee</td>
                  <td> - </td>
                  <td />
                  <td>$100</td>
                </tr>
                <tr>
                  <td />

                  <td>Expiry Date</td>
                  <td> - </td>
                  <td />
                  <td>20th October, 2022</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-warning">Unlease</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-center text-info  my-5">Interiors</h2>
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2 g-2 g-lg-3 mb-5 ">
      <div className="col d-flex justify-content-center ">
        <div className="p-3 border bg-light h-75 w-75">
          <img src={interior1} className="img-fluid rounded-start h-100 w-100 align-center" alt="..." />
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="p-3 border bg-light h-75 w-75">
          <img src={interior2} className="img-fluid rounded-start h-100 w-100 align-center" alt="..." />
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="p-3 border bg-light h-75 w-75">
          <img src={interior3} className="img-fluid rounded-start h-100 w-100 align-center" alt="..." />
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="p-3 border bg-light h-75 w-75">
          <img src={interior2} className="img-fluid rounded-start h-100 w-100 align-center" alt="..." />
        </div>
      </div>
    </div>
  </div>
);

export default MyLeaseDetails;
