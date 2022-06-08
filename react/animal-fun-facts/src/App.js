import animals from './components/animals';
import ocean from './assets/img/ocean.jpeg'
import React from 'react';


const title = '';
const background = (
  <img 
  className='background'
  alt='ocean'
  src={ocean}
  />
);

const images = [];

// This can be toggled true/false to make background on/off using a guard clause
const showBackground = true;


// When an animal is clicked,  the event target is going to the be image element, so we're taking the param event.
const displayFact = (event) => {
  // We could have taken any param instead of 'alt' (refer to for-loop), like 'aria-label', but alt is straight-forward. This will give us the correct name to reference in the array
  const selectedAnimal = event.target.alt;
  // The selected animal has to be referenced from the animals array
  const animalInfo = animals[selectedAnimal];
  // Randomly select one of three facts
  let randomInt = Math.floor(Math.random()*3)

  document.getElementById('fact').innerHTML = animalInfo.facts[randomInt];
}

for(const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

const animalFacts = (
  <div>
    {showBackground && background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
    <h1>{!title ? "Click an animal for a fun fact" : title}</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      {animalFacts}
    </div>
  );
}


export default App;
