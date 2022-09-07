import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'Bio',
      description: 'Click the photos below to learn more about me! You can also check me out on LinkedIn and GitHub.',
    },
    {
      name: 'Experience',
      description: 'Click the photos below to learn about applications I worked on. Please checkout my GitHub to see more.',
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