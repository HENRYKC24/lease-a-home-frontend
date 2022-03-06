import axios from 'axios';

const getLeaseApartment = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/apartments`);

    const apartmentDetails = data.map((apartment) => apartment.id === id);
    return apartmentDetails;
  } catch (error) {
    console.log('error');
  }
};

export default getLeaseApartment;
