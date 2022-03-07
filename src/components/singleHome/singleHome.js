import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const apartmentss = useSelector((state) => state.apartment);
  const { apartment } = apartmentss;
  const { name, description, image } = apartment;

  if (!apartment) {
    return (
      <h1>Loading</h1>
    );
  }
  return (
    <section>
      <h1>Hello details</h1>
      <div className="card mx-3">
        <img className="apartment-image hover_effect center-block" src={image} alt={name} />
        <h4 className="my-2 text-center apartmentname">{name}</h4>
        <p className="description font-weight-light text-center ms-3">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Detail;
