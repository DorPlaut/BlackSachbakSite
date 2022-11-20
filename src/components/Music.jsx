import React, { useEffect, useState } from 'react';
import MiniArticle from './MiniArticle';
import BigArticle from './BigArticle';

function Music() {
  const [spotifyAlbum, setSpotifyAlbum] = useState('BSVTF');
  // ARTICLES
  const spotifyPlayer = (
    <>
      <div className="article-btn-container">
        <button
          className="btn"
          onClick={() => {
            setSpotifyAlbum('BSVTF');
          }}
        >
          Black Sachbak Vs The Future
        </button>
        <button
          className="btn"
          onClick={() => {
            setSpotifyAlbum('NPNG');
          }}
        >
          No Pain No Gain
        </button>
      </div>
      <br />
      <iframe
        className="spotify"
        src={
          spotifyAlbum == 'BSVTF'
            ? 'https://open.spotify.com/embed/album/0IdPTp5UgtJNMqdaspjwTr?utm_source=generator'
            : 'https://open.spotify.com/embed/album/52xpL49cpS7sbfqCxsCTaa?utm_source=generator'
        }
        width="100%"
        height="250rem"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );

  const youtubePlayer = (
    <>
      <iframe
        width="100%"
        height="300rem"
        src="https://www.youtube.com/embed/FmkSts6PnsA"
        title="FTL"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />

      <iframe
        width="100%"
        height="300rem"
        src="https://www.youtube.com/embed/LY2IyCVFtdA"
        title="Haircut i never got"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
  const youtubePlayer2 = (
    <>
      <iframe
        width="100%"
        height="300rem"
        src="https://www.youtube.com/embed/ngTlrJSwSrk"
        title="Obcene extreame"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <iframe
        width="100%"
        height="300rem"
        src="https://www.youtube.com/embed/4aIbTCCmHug"
        title="Full Show Levontin"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
  const content = 'Not avilable...';
  return (
    <div className="page">
      <h3 className="article-heading">Music</h3>
      <div className="underline"></div>
      <MiniArticle heading="Full albums on spotify" content={spotifyPlayer} />
      <div className="tow-article-culumn">
        {/* <MiniArticle heading="Full albums on spotify" content={spotifyPlayr} />
        <MiniArticle heading="Get Our Music" content={content} /> */}
        <MiniArticle heading="Music Videos" content={youtubePlayer} />
        <MiniArticle heading="Live Shows" content={youtubePlayer2} />
      </div>
    </div>
  );
}

export default Music;
