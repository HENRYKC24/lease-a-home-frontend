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

  it('Logs out properly', () => {
    expect(hitAPIWithLogoutDetails({
      auth: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNSIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY0NjQ5MDI3OSwiZXhwIjoxNjQ2NDkzODc5LCJqdGkiOiIyZTgzOWM1MC1hZTEwLTQ1NjUtYmY1MC04YzMzMzE2ZDQ2ODYifQ.KdGYxJUtaU7Ut9327pyTuYf2xy9oI1rJfs9qjRs8FhM',
    })).toEqual({
      name: '',
      email: '',
      loggedIn: 'out',
      userId: '',
      signedUp: false,
    });
  });
});
