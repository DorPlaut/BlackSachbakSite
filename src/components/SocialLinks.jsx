import React from 'react';
import { BsSpotify, BsFacebook } from 'react-icons/bs';
import { FaBandcamp } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { AiFillInstagram, AiFillApple } from 'react-icons/ai';

function SocialLinks() {
  return (
    <ul id="social">
      <li id="spotify-link" className="social-link">
        <a
          href="https://open.spotify.com/artist/0fnGGMZXcYYENM96GjRFP4?si=6tdls0qAR4qzfccblmmgIQ"
          target="_blank"
        >
          <BsSpotify />
        </a>
      </li>
      <li id="apple-link" className="social-link">
        <a
          href="https://music.apple.com/us/artist/black-sachbak/1186364784"
          target="_blank"
        >
          <AiFillApple className="border" />
        </a>
      </li>
      <li id="facebook-link" className="social-link">
        <a href="https://www.facebook.com/BlackSachbak/" target="_blank">
          <BsFacebook />
        </a>
      </li>
      <li id="youtube-link" className="social-link">
        <a href="https://www.youtube.com/BLACKSACHBAK" target="_blank">
          <SiYoutubemusic />
        </a>
      </li>
      <li id="instagram-link" className="social-link">
        <a href="https://www.instagram.com/blacksachbak/" target="_blank">
          <AiFillInstagram className="border" />
        </a>
      </li>
      <li id="bandcamp-link" className="social-link">
        <a href="https://blacksachbak.bandcamp.com/" target="_blank">
          <FaBandcamp />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
