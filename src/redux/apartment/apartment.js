import fetchDataApartments from '../api';

const initialState = {
  apartments: [],
  apartment: {},
};

// Constants
const FETHCH_APARTMENTS = 'FETHCH_APARTMENTS';
const FETHCH_ONE_APARTMENT = 'FETHCH_ONE_APARTMENT';

// Action Creators
export const getAllApartments = (payload) => ({
  type: FETHCH_APARTMENTS,
  payload,
});

export const getOneApartment = (payload) => ({
  type: FETHCH_ONE_APARTMENT,
  payload,
});

// Reducers
export const apartmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETHCH_APARTMENTS:
      console.log(payload, state, 'this is payload');
      return {
        ...state,
        apartments: [...state.apartments, payload],
      };
    case FETHCH_ONE_APARTMENT:
      return payload;

    default:
      return state;
  }
};

export const fetchApartments = () => (async (dispatch) => {
  const apartment = await fetchDataApartments();
  console.log(apartment, 'newApartment');
  dispatch(
    {
      type: FETHCH_APARTMENTS,
      payload: apartment,
    },
  );
});
