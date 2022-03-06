import axios from 'axios';

// eslint-disable-next-line consistent-return
const getLeaseApartment = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/apartments`);

    const apartmentDetails = data.find((apartment) => apartment.id === id);
    console.log('================================================================');
    console.log('data ===>', data);
    console.log('apartmentDetails ===>', apartmentDetails);
    console.log('=====================================================================');
    return apartmentDetails;
  } catch (error) {
    console.log('error');
  }
};

export default getLeaseApartment;
