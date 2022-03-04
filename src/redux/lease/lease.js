import axios from 'axios';

const GET_LEASES_REQUEST = 'GET_LEASES_REQUEST';
const GET_LEASES_SUCCESS = 'GET_LEASES_SUCCESS';
const GET_LEASES_FAIL = 'GET_LEASES_FAIL';

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

export default function myLeasesReducer(state = { leases: null }, action) {
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
}
