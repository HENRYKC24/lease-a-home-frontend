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
