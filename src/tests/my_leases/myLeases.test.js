import { getMyLeasesAction } from '../../redux/lease/lease';

describe('post reducer', () => {
  const user = {
    name: 'abdul',
    email: 'abdul@gmail.com',
    loggedIn: 'in',
    userId: 1,
    signedUp: true,

  };
  it('Signs in properly', () => {
    expect(getMyLeasesAction(user.userId)).toBeDefined();
  });

  it('Signs up properly', () => {
    expect(getMyLeasesAction(user.userId).length).toBeGreaterThanOrEqual(0);
  });
});
