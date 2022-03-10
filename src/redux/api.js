import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL2;

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
