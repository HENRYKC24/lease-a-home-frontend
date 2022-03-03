import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  loggenIn: false,
  userId: '',
  signedUp: false,
};

// Constants
const SIGN_UP = 'lease_a_home/SIGN_UP';
const LOGIN = 'lease_a_home/LOGIN';
const LOGOUT = 'lease_a_home/LOGOUT';

// Action Creators
export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

// Reducesrs
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...payload,
      };
    case LOGIN:
      return payload;

    default:
      return state;
  }
};

const hitAPIWithSignupDetails = (details) => async (dispatch) => {
  const { name, email, password } = details;
  try {
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/users',
      data: {
        user: {
          email,
          password,
          name,
        },
      },
    });
    dispatch(signUp({
      name: '',
      email: '',
      loggenIn: false,
      userId: '',
      signedUp: 'up',
    }));
  } catch (error) {
    dispatch(signUp({
      name: '',
      email: '',
      loggenIn: false,
      userId: '',
      signedUp: 'down',
    }));
  }
  // dispatch(fetchData(data));
};

export const hitAPIWithSigninDetails = (details) => async (dispatch) => {
  const { email, password } = details;
  try {
    const signUpRespons = await axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/users/sign_in',
      data: {
        user: {
          email,
          password,
        },
      },
    });
    const { data, headers } = signUpRespons;
    const { user } = data;
    const { authorization } = headers;
    const mainUser = {
      name: user.name,
      email: user.email,
      id: user.id,
      auth: authorization,
    };

    localStorage.setItem('userAuth', JSON.stringify(authorization));

    const appState = {
      ...mainUser,
    };
    delete appState.auth;
    dispatch(signUp({
      ...appState,
      loggenIn: false,
    }));
  } catch (error) {
    console.log('Something went wront');
  }

  // dispatch(fetchData(data));
};

export default hitAPIWithSignupDetails;
