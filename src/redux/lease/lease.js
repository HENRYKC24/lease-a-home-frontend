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

const CREATE_LEASE = 'lease_a_home/CREATE_LEASE';
const LEASE_STATUS = 'lease_a_home/LEASE_STATUS';

const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  lease_status: '',
};

export const getMyLeasesAction = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_LEASES_REQUEST });
    const { data } = await axios.get(`${baseUrl}/user/${userId}/leases`);
    dispatch({ type: GET_LEASES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LEASES_FAIL, payload: error.message });
  }
};

// eslint-disable-next-line consistent-return
export const getSingleLeaseAction = (id, userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_LEASE_BY_ID_REQUEST });
    // const { user } = getState();
    const { data } = await axios.get(`${baseUrl}/user/${userId}/leases/${id}`);
    dispatch({ type: GET_LEASE_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LEASE_BY_ID_FAIL, payload: error.message });
  }
};

export const deleteLeaseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_LEASE_REQUEST });
    const { user } = getState();
    await axios.delete(`${baseUrl}/user/${user.userId}/leases/${id}`);
    dispatch({ type: DELETE_LEASE_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_LEASE_FAIL, payload: error.message });
  }
};

export const myLeasesReducer = (state = { loading: true, leases: null, error: null }, action) => {
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

export const leaseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_LEASE:
      return {
        ...payload,
      };
    case LEASE_STATUS:
      return {
        lease_status: payload,
      };
    default:
      return state;
  }
};

export const leaseDetailsReducer = (state = { loading: true, lease: null, err: null }, action) => {
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
      return { loading: false, message: 'Lease Deleted successFully' };
    case DELETE_LEASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const leaseStatusAction = (payload) => ({
  type: LEASE_STATUS,
  payload,
});

export const addLeaseToAPI = (details) => async (dispatch) => {
  const {
    from, to, cancelled, userId, apartmentId,
  } = details;
  const leaseURL = `${baseUrl}/user/${userId}/leases`;
  try {
    await fetch(leaseURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          from,
          to,
          cancelled,
          user_id: userId,
          apartment_id: apartmentId,
        },
      ),
    });
    dispatch(leaseStatusAction('Lease Successfully Created!'));
  } catch (error) {
    dispatch(leaseStatusAction('Lease was not Created!'));
  }
};
