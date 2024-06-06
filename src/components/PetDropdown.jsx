import React from 'react';
import './PetDropdown.css'
import '../App.css'

const PetDropdown = ({ pets, onPetChange }) => {
  return (
   <div className='select '>
    <select  onChange={onPetChange}>
      <option value="">Select a pet</option>
      {pets.map(pet => (
        <option key={pet.name} value={pet.name}>
          {pet.name}
        </option>
      ))}
    </select>
    </div>
  );
};

export default PetDropdown;
