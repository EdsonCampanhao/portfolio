import './Knowledges.css'
import React from 'react'


import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt,FaReact,FaFigma} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMui} from 'react-icons/si'


const Knowledges = () => {


    return (

        <section className='knowledges'>          
                <article>
                    <p>HTML5</p>
                    <AiFillHtml5 size={32} className='icon' />
                </article>
                <article>
                    <p>CSS3</p>
                    <FaCss3Alt size={32} className='icon' />
                </article>
                <article>
                    <p>JavaScript</p>
                    <IoLogoJavascript size={32} className='icon' />
                </article>
                <article>
                    <p>React</p>
                    <FaReact size={32} className='icon' />
                </article>
                <article>
                    <p>Material UI</p>
                    <SiMui size={32} className='icon' />
                </article>
                <article>
                    <p>Figma</p>
                    <FaFigma size={32} className='icon' />
                </article>

        </section>
    )
}

export default Knowledges;

