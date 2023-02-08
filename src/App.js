import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Former Insurance Agent Turned Developer',
    },
    {
      name: 'Projects',
      description: 'Click the photos below to view my projects. You can visit my GitHub for additional information.',
    },
    { name: 'Resume', description: 'Click the photos below to see more information about my work history, relevant experience, and certifications.' }
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