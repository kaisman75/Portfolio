import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF ,  faLinkedin,faGithub,faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons'

import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i ><FontAwesomeIcon icon={faGithub}/></i>
        <span></span>
      </a>
      {/* <a
        href={socialMediaLinks.gitlab}
        className="icon-button gitlab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a> */}
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i><FontAwesomeIcon icon={faLinkedin}/></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i><FontAwesomeIcon icon={faGoogle}/></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.twitter}
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i><FontAwesomeIcon icon={faTwitter}/></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.facebook}
        className="icon-button facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
      <i><FontAwesomeIcon icon={faFacebookF}/></i>
      <span></span>
      </a>
    </div>
  );
}
