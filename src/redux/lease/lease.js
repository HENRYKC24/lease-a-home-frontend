import axios from 'axios';

const GET_LEASES_REQUEST = 'GET_LEASES_REQUEST';
const GET_LEASES_SUCCESS = 'GET_LEASES_SUCCESS';
const GET_LEASES_FAIL = 'GET_LEASES_FAIL';

const GET_LEASE_BY_ID_REQUEST = 'GET_LEASE_BY_ID_REQUEST';
const GET_LEASE_BY_ID_SUCCESS = 'GET_LEASE_BY_ID_SUCCESS';
const GET_LEASE_BY_ID_FAIL = 'GET_LEASE_BY_ID_FAIL';

const DELETE_LEASE_REQUEST = 'DELETE_LEASE_REQUEST';
const DELETE_LEASE_SUCCESS = 'DELETE_LEASE_SUCCESS';
const DELETE_LEASE_FAIL = 'DELETE_LEASE_FAIL';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getMyLeasesAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_LEASES_REQUEST });
    const { user } = getState();
    const { data } = await axios.get(`${baseUrl}/user/${user.userId}/leases`);
    console.log('all leases data ==>', data);
    dispatch({ type: GET_LEASES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LEASES_FAIL, payload: error.message });
  }
};

export const getSingleLeaseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_LEASE_BY_ID_REQUEST });
    const { user } = getState();
    const { data } = await axios.get(`${baseUrl}/user/${user.userId}/leases/${id}`);
    console.log('single lease data ==>', data);
    dispatch({ type: GET_LEASE_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LEASE_BY_ID_FAIL, payload: error.message });
  }
};

export const cancelLeaseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_LEASE_REQUEST });
    const { user } = getState();
    const { data } = await axios.delete(`${baseUrl}/user/${user.userId}/leases/${id}`);
    console.log('delete lease data ==>', data);
    dispatch({ type: DELETE_LEASE_SUCCESS, payload: data });
  } catch (error) {
    console.log('error', error.message);
    dispatch({ type: DELETE_LEASE_FAIL, payload: error.message });
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

export const deleteLeaseReducer = (state = { lease: null }, action) => {
  switch (action.type) {
    case DELETE_LEASE_REQUEST:
      return { loading: true };
    case DELETE_LEASE_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_LEASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
