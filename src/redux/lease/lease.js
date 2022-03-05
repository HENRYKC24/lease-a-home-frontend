import axios from 'axios';

const GET_LEASES_REQUEST = 'GET_LEASES_REQUEST';
const GET_LEASES_SUCCESS = 'GET_LEASES_SUCCESS';
const GET_LEASES_FAIL = 'GET_LEASES_FAIL';

const GET_LEASE_BY_ID_REQUEST = 'GET_LEASE_BY_ID_REQUEST';
const GET_LEASE_BY_ID_SUCCESS = 'GET_LEASE_BY_ID_SUCCESS';
const GET_LEASE_BY_ID_FAIL = 'GET_LEASE_BY_ID_FAIL';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getMyLeasesAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_LEASES_REQUEST });
    const { user } = getState();
    console.log('user==>', user);
    // const { data } = await axios.get(`${baseUrl}/user/${user.id}/leases`);
    const { data } = await axios.get(`${baseUrl}/user/3/leases`);
    console.log('data ==>', data);
    dispatch({ type: GET_LEASES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LEASES_FAIL, payload: error.message });
  }
};

export const getSingleLeaseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_LEASE_BY_ID_REQUEST });
    const { user } = getState();
    console.log('user==>', user);
    const { data } = await axios.get(`${baseUrl}/user/3/leases/${id}`);
    console.log('data ==>', data);
    dispatch({ type: GET_LEASE_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LEASE_BY_ID_FAIL, payload: error.message });
  }
};

export const myLeasesReducer = (state = { leases: null }, action) => {
  switch (action.type) {
    case GET_LEASES_REQUEST:
      return { loading: true };
    case GET_LEASES_SUCCESS:
      return { loading: false, leases: action.payload };
    case GET_LEASES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const leaseDetailsReducer = (state = { lease: null }, action) => {
  switch (action.type) {
    case GET_LEASE_BY_ID_REQUEST:
      return { loading: true };
    case GET_LEASE_BY_ID_SUCCESS:
      return { loading: false, lease: action.payload };
    case GET_LEASE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
