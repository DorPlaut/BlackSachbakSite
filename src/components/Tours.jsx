import React from 'react';
import BigArticle from './BigArticle';
import MiniArticle from './MiniArticle';

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
    <div className="page">
      <h3 className="article-heading">Tours</h3>
      <div className="underline"></div>
      <div className="tow-article-culumn">
        <MiniArticle heading="Allied Forces Tour" content={content} />
        <MiniArticle heading="Fall Of The Empires Tour" content={content2} />
      </div>
    </div>
  );
}

export default Tours;
