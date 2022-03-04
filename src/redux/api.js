import axios from 'axios';

const baseUrl = 'https://lease-a-home-api.herokuapp.com';

const fetchDataApartments = async () => {
  try {
    const response = await axios.get(`${baseUrl}/apartments/`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export default fetchDataApartments;
