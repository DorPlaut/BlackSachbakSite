import React from 'react';
import Music from './Music';
import Tours from './Tours';
import { Parallax } from 'react-scroll-parallax';
import Gallery from './Gallery';

function MainPage() {
  return (
    <>
      <Parallax speed={-15} className="paralex-position">
        <section className="section" id="music-page">
          <Music />
        </section>
      </Parallax>

      <div id="gallery">
        <Gallery />
      </div>
      <Parallax speed={-15} className="paralex-position">
        <section className="section" id="tours-page">
          <Tours />
        </section>
      </Parallax>
    </>
  );
}

export default MainPage;
