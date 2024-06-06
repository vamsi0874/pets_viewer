import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetDropdown from './components/PetDropdown';
import PetDetails from './components/PetDetails';
import './App.css';
import {assests} from './assets/assests'



const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const key = import.meta.env.VITE_API_URL
  useEffect(() => {
    axios.get(key) 
      .then(response => setPets(response.data))
      .catch(error => console.error(error));
  }, []);

  const handlePetChange = (event) => {
    const pet = pets.find(pet => pet.name === event.target.value);
    setSelectedPet(pet);
  };

  return (
    <div className="App">
     <img src={assests.petlogo}/>
      <h1 >Pet Viewer</h1>
      <PetDropdown pets={pets} onPetChange={handlePetChange} />
      {selectedPet ? (
        <PetDetails pet={selectedPet} />
      ) : (
        <p>Please select a pet to view details.</p>
      )}
    </div>
  );
};

export default App;
