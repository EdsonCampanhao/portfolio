import React from 'react';
import './Footer.css'
import {AiOutlineMail,AiFillGithub,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id='Contatos' className='footer'>
        <h2>contatos</h2>
        <address> Rio de Janeiro, São gonçalo</address>
        <div className="footer__icons">
            <AiOutlineMail size={32} fill='white'/>
            <AiFillGithub size={32} fill='white'/>
            <AiFillLinkedin size={32} fill='white'/>
            <AiOutlineWhatsApp size={32} fill='white'/>
        </div>


    </section>
  )
}

export default Footer;