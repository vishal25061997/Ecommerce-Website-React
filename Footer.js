import React from 'react'
import './Footer.css';
import {BsFacebook,BsSpotify,BsYoutube} from 'react-icons/bs';
const Footer = () => {
  return (
   
    <footer className='footer'>
    <div className='footer-title'>The Generics</div>
    <div className='footer-icons'>
      <span>
        <a href="https://www.youtube.com">
                 <BsYoutube/> 
                 </a> 
                 </span>
        <span>
        <a href="https://spotify.com">
                   <BsSpotify/>
                </a>
                </span>
       <span>
        <a href="https://facebook.com">
                <BsFacebook/>
                </a>
                </span>
    </div>
    </footer>

  )
}

export default Footer