import React from 'react';
import Music from './Music';
import Tours from './Tours';

function MainPage() {
  return (
    <>
      <section className="section" id="music-page">
        <Music />
      </section>
      <section className="section" id="tours-page">
        <Tours />
      </section>
    </>
  );
}

export default MainPage;
