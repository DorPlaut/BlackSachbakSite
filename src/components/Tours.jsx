import React from 'react';
import BigArticle from './BigArticle';
import MiniArticle from './MiniArticle';
import { Parallax } from 'react-scroll-parallax';

function Tours() {
  const content = (
    <>
      <div>
        <p className="article-text">
          For Immediate Release: Dates open for this tour end of September
          beginning October 2023. 2 great Thrash powerhouses, in Germany and
          around it. drop a line at Beerbongbooking@gmail.com and we'll make it
          happen!
        </p>
        <br />
        <br />
        <div>
          <img className="article-img" src="./blackSachbakPoster2.jpg" alt="" />
        </div>
      </div>
    </>
  );
  const content2 = (
    <>
      <div>
        <p className="article-text">
          For Immediate release: BeerBong Booking now booking these great bands
          This April open for mostly Central/Southern Europe: Austria, North
          Italy, Hungary, Switzerland, France. Send your offers to this page,
          Email us on Beerbongbooking@gmail.com or send some bird with a note.
        </p>
        <br />
        <div>
          <img className="article-img" src="./blackSachbakPoster1.jpg" alt="" />
        </div>
      </div>
    </>
  );
  return (
    <Parallax speed={15} className="paralex-position">
      <div className="page">
        <div>
          <div className="scroll-anchor" id="tours"></div>
          <h3 className="section-heading">Tours</h3>
        </div>
        <div className="underline"></div>
        <div className="tow-article-culumn">
          <MiniArticle heading="Allied Forces Tour" content={content} />
          <MiniArticle heading="Fall Of The Empires Tour" content={content2} />
        </div>
      </div>
    </Parallax>
  );
}

export default Tours;
