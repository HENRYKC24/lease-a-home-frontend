import { userReducer, login } from '../../../redux/user/user';
// import { Dispatch } from "react";
const hitAPIWithSigninDetails = (details) => {
  const { name, email } = details;

  return userReducer({}, login({
    name,
    email,
    loggedIn: 'in',
    userId: 1,
    signedUp: true,
  }));
};

export default hitAPIWithSigninDetails;
