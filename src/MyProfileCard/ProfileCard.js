import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faUser, faCoffee,  } from '@fortawesome/fontawesome-free-solid'
import {
    faGithubAlt,
    faGoogle,
    faInstagram,
    faTwitter,
    faTelegram
  } from '@fortawesome/free-brands-svg-icons';
import './profile.css' 
//import mypicture from '../pictures/EmonAdrian.jpeg' 


function ProfileCard() {
    return (
        <div className='Social-Section'>
        <div class="paper pink">
                  <div class="tape-section"></div>
                  <p><FontAwesomeIcon className="Social-Media" icon={faTwitter}  /></p>
              <div class="tape-section"></div>
        </div>
         <div class="paper blue">
              <div class="top-tape"></div>
              <p><FontAwesomeIcon className="Social-Media" icon={faGithubAlt} /></p>
        </div>
        <div class="paper pink">
                  <div class="tape-section"></div>
                  <p><FontAwesomeIcon className="Social-Media" icon={faGoogle} /></p>
              <div class="tape-section"></div>
        </div>

        </div>
    )
}

export default ProfileCard
