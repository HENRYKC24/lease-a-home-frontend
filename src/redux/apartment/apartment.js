import fetchDataApartments from '../api';

const initialState = {
  apartments: [],
  apartment: {},
};

// Constants
const FETHCH_APARTMENTS = 'FETHCH_APARTMENTS';
const FETHCH_ONE_APARTMENT = 'FETHCH_ONE_APARTMENT';
