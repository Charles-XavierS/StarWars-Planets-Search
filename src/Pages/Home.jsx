import React from 'react';

import Table from '../Components/Table';
import Logo from './Logo.jpeg';

function Home() {
  return (
    <main>

      <header className="logos">
        <div>
          <img className="death-star" src="https://c.tenor.com/gSfs7xmRUXcAAAAM/death-star-spin.gif" alt="Death Star gif" />
          <img className="logo" src={ Logo } alt="Star Wars Logo" />
        </div>
      </header>

      <Table />
    </main>
  );
}

export default Home;
