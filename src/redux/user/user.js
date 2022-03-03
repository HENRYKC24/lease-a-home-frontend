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
      console.log(`paload=${payload}, type=${type}`);
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
      url: `${process.env.REACT_APP_SIGN_UP_ENDPOINT2}`,
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
  console.log(876543);
  const { email, password } = details;
  try {
    const signUpRespons = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_LOGIN_ENDPOINT2}/users/sign_in`,
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
      loggenIn: 'in',
      userId: user.id,
      signedUp: true,
    };

    localStorage.setItem('userAuth', JSON.stringify(authorization));

    // const appState = {
    //   ...mainUser,
    // };
    // delete appState.auth;
    dispatch(signUp(mainUser));
    console.log('Login was a success');
  } catch (error) {
    dispatch(signUp({
      name: '',
      email: '',
      loggenIn: 'out',
      userId: '',
      signedUp: false,
    }));
    console.log('Something went wront');
  }

  // dispatch(fetchData(data));
};

export const hitAPIWithLogoutDetails = (details) => async (dispatch) => {
  console.log(876543);
  const { email, password } = details;
  try {
    const signUpRespons = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_SIGN_UP_ENDPOINT2}/users/sign_in`,
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
      loggenIn: 'in',
      userId: user.id,
      signedUp: true,
    };

    localStorage.setItem('userAuth', JSON.stringify(authorization));

    // const appState = {
    //   ...mainUser,
    // };
    // delete appState.auth;
    dispatch(signUp(mainUser));
    console.log('Login was a success');
  } catch (error) {
    dispatch(signUp({
      name: '',
      email: '',
      loggenIn: 'out',
      userId: '',
      signedUp: false,
    }));
    console.log('Something went wront');
  }

  // dispatch(fetchData(data));
};

export default hitAPIWithSignupDetails;
