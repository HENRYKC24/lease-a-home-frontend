import { userReducer, logout } from '../../../redux/user/user';

const hitAPIWithLogoutDetails = (details) => {
  const { auth } = details;

  return userReducer({}, logout({
    name: '',
    email: '',
    loggedIn: !auth || 'out',
    userId: '',
    signedUp: false,
  }));
};

export default hitAPIWithLogoutDetails;
