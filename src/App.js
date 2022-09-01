import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'Bio',
      description: 'Hello, my name is Cameron.',
    },
    {
      name: 'Experience',
      description: 'Here are a few projects I worked on during a coding bootcamp.',
    },
    { name: 'Resume', description: 'Here is more about my professional background.' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>

      </main>
    </div>
  );
}

export default App;