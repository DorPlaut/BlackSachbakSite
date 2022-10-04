import React from 'react';
import { BsSpotify, BsFacebook } from 'react-icons/bs';
import { FaBandcamp } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai';

function SocialLinks() {
  return (
    <ul id="social">
      <li id="spotify-link" className="social-link">
        <a href="#">
          <BsSpotify />
        </a>
      </li>
      <li id="facebook-link" className="social-link">
        <a href="#">
          <BsFacebook />
        </a>
      </li>
      <li id="youtube-link" className="social-link">
        <a href="#">
          <SiYoutubemusic />
        </a>
      </li>
      <li id="instagram-link" className="social-link">
        <a href="#">
          <AiFillInstagram className="border" />
        </a>
      </li>
      <li id="bandcamp-link" className="social-link">
        <a href="#">
          <FaBandcamp />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
