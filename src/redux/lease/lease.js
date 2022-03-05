const CREATE_LEASE = 'lease_a_home/CREATE_LEASE';
const LEASE_STATUS = 'lease_a_home/LEASE_STATUS';

const initialState = {
  lease_status: '',
};

const leaseStatusAction = (payload) => ({
  type: LEASE_STATUS,
  payload,
});

export const leaseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_LEASE:
      return {
        ...payload,
      };
    case LEASE_STATUS:
      return {
        lease_status: payload,
      };
    default:
      return state;
  }
};

export const addLeaseToAPI = (details) => async (dispatch) => {
  const {
    from, to, cancelled, userId, apartmentId,
  } = details;
  const leaseURL = `https://lease-a-home-api.herokuapp.com/user/${userId}/leases`;
  try {
    await fetch(leaseURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        from,
        to,
        cancelled,
        user_id: userId,
        apartment_id: apartmentId,
      },
    });
    dispatch(leaseStatusAction('Lease Successfully Created!'));
  } catch (error) {
    dispatch(leaseStatusAction('Lease was not Created!'));
  }
};
