import fetchDataApartments, { fetchSingleApartments } from '../api';

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
      return {
        ...state,
        apartments: [...state.apartments, payload],
      };
    case FETHCH_ONE_APARTMENT:
      return { apartment: payload };

    default:
      return state;
  }
};

const fetchApartments = () => (async (dispatch) => {
  const apartment = await fetchDataApartments();
  dispatch(
    {
      type: FETHCH_APARTMENTS,
      payload: apartment,
    },
  );
});

export const singleApartments = (id) => (async (dispatch) => {
  const apartment = await fetchSingleApartments(id);
  dispatch(
    {
      type: FETHCH_ONE_APARTMENT,
      payload: apartment,
    },
  );
});

export default fetchApartments;
