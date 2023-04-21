import React from 'react';
import './Footer.css'
import {AiOutlineMail,AiFillGithub,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id='Contatos' className='footer'>
        <h2>contatos</h2>
        <address> Rio de Janeiro, São gonçalo</address>
        <div className="footer__icons">
          <a href="mailto:edsonlemos0525@gmail.com"> <AiOutlineMail size={32} fill='white'/></a> 
           <a href="https://github.com/EdsonCampanhao"> <AiFillGithub size={32} fill='white'/></a>
            <a href="https://www.linkedin.com/in/edson-campanhão/"><AiFillLinkedin size={32} fill='white'/></a>
            <a href="https://wa.me/5521976202876"><AiOutlineWhatsApp size={32} fill='white'/></a>
        </div>


    </section>
  )
}

export default Footer;