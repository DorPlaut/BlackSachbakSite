import React from 'react';
import Music from './Music';
import Tours from './Tours';

function MainPage() {
  return (
    <>
      <section className="section" id="musicPage">
        <Music />
      </section>
      <section className="section" id="toursPage">
        <Tours />
      </section>
    </>
  );
}

export default MainPage;
