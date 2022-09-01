import React, { useState } from 'react';
import Nav from './components/Nav';

import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'Bio',
      description: 'Bio',
    },
    {
      name: 'Experience',
      description: 'Experience',
    },
    { name: 'Resume', description: 'Resume' }
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