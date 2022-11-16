import React from 'react';

function MiniArticle() {
  return (
    <>
      <article className="mini-article article">
        <h3 className="article-heading">Article</h3>
        <div className="underline"></div>
        <iframe
          className="player"
          src="https://bandcamp.com/EmbeddedPlayer/album=2786052922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://blacksachbak.bandcamp.com/album/black-sachbak-vs-the-future">
            Black Sachbak vs. The Future by Black Sachbak
          </a>
        </iframe>
      </article>
    </>
  );
}

export default MiniArticle;
