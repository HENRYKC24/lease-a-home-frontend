import hitAPIWithSigninDetails from './__mocks__/hitAPIWithSigninDetails';
import hitAPIWithSignupDetails from './__mocks__/hitAPIWithSignupDetails';
import hitAPIWithLogoutDetails from './__mocks__/hitAPIWithLogoutDetails';

describe('post reducer', () => {
  it('Signs in properly', () => {
    expect(hitAPIWithSigninDetails({
      name: 'Henry',
      email: 'henry@gmail.com',
    })).toEqual({
      name: 'Henry',
      email: 'henry@gmail.com',
      loggedIn: 'in',
      userId: 1,
      signedUp: true,
    });
  });

  it('Signs up properly', () => {
    expect(hitAPIWithSignupDetails({
      name: 'Henry',
      email: 'henry@gmail.com',
      password: 'kkkkkk',
    })).toEqual({
      name: 'Henry',
      email: 'henry@gmail.com',
      loggedIn: '',
      userId: 1,
      signedUp: true,
    });
  });

  
});
