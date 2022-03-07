import axios from 'axios';

// const baseUrl = 'https://lease-a-home-api.herokuapp.com';
const baseUrl = 'http://127.0.0.1:5000';

const fetchDataApartments = async () => {
  try {
    const response = await axios.get(`${baseUrl}/apartments/`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchSingleApartments = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/apartments/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export default fetchDataApartments;
