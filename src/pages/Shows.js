import React from 'react';
import FinnkinoShows from '../pages/FinnkinoShows';

export default function Shows() {
  return (
    <div>
      <p>This is the Shows page</p>
      <div>
        <h1>Finnkino näytösaikataulut</h1>
        <main>
          <FinnkinoShows />
        </main>
      </div>
    </div>
  );
}
