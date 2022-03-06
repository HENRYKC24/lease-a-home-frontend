import axios from 'axios';

export const getLeaseApartment = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/apartments`);
  } catch (error) {
    console.log('error');
  }
};
