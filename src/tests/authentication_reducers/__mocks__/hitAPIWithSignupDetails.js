import { userReducer, signUp } from '../../../redux/user/user';
// import { Dispatch } from "react";
const hitAPIWithSignupDetails = (details) => {
  const { name, email } = details;

  return userReducer({}, signUp({
    name,
    email,
    loggedIn: '',
    userId: 1,
    signedUp: true,
  }));
};

export default hitAPIWithSignupDetails;
