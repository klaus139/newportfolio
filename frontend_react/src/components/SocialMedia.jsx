import React from 'react';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.twitter.com/Nick_k1aus" target="_blank" rel="noreferrer">
            <BsTwitter />
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/nicholas-igunbor" target='blank' rel='noreferrer'>
            <FaFacebookF />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/nick_k1aus" target='blank' rel='noreferrer'>
            <BsInstagram />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/nicholasigunbor" target='blank' rel='noreferrer'>
            <FaLinkedinIn />
            </a>
        </div>
        <div>
            <a href="https://www.github.com/klaus139" target='blank' rel='noreferrer'>
            <FaGithub />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia