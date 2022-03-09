import { getMyLeasesAction, getSingleLeaseAction } from '../../redux/lease/lease';

describe('post reducer', () => {
  const user = {
    name: 'abdul',
    email: 'abdul@gmail.com',
    loggedIn: 'in',
    userId: 1,
    signedUp: true,

  };
  it('It returns data', () => {
    expect(getMyLeasesAction(user.userId)).toBeDefined();
  });

  it('It returns an array greater or equal to 0', () => {
    expect(getMyLeasesAction(user.userId).length).toBeGreaterThanOrEqual(0);
  });

  it('It returns a single lease', () => {
    expect(getSingleLeaseAction(1, user.userId).length).toBeGreaterThanOrEqual(1);
  });
});
