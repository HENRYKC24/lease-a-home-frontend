import axios from 'axios';

// eslint-disable-next-line consistent-return
const getLeaseApartment = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL2}/apartments`);
    const apartmentDetails = data.find((apartment) => apartment.id === id);
    console.log('apartmentDetails', apartmentDetails);
    return apartmentDetails.name;
  } catch (error) {
    console.log('error');
  }
};

export default getLeaseApartment;
