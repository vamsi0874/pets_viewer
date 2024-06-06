import React from 'react';
import '../App.css'


const PetDetails = ({ pet }) => {
  return (
    <div className="PetDetails ">
      <h2>Pet Details</h2>
      <p><strong>Name:</strong> {pet.name}</p>
      <p><strong>Type:</strong> {pet.type}</p>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Weight:</strong> {pet.weight}</p>
      <p><strong>Color:</strong> {pet.color}</p>
    </div>
  );
};

export default PetDetails;
