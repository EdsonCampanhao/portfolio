import React from 'react';
import Button from '@mui/material/Button';
import './About.css'

import profile from './profile.png'

const About = () => {



    return (

        <section className='about'>

            <div className="about__profile">

                <div className="img">
                    <img src={profile} alt="Foto pessoal" />
                </div>
                <div className='buttons'>
                    <h2>Olá, eu sou o Edson Gabryel!</h2>
                    <p>Desenvolvedor Front-End</p>

                    <a href='https://drive.google.com/file/d/1Od9U-UHkQvNjRSEbIt9SvBODT8Xz0qlN/view?usp=sharing' target="_blank">
                        <Button className='button__cv' variant="contained" >

                            baixar currículo
                        </Button></a>
                    <a href="https://wa.me/5521976202876" target="_blank">
                        <Button className='button' id='button__contact' variant="outlined" >
                            entrar em contato
                        </Button>
                    </a>
                </div>
            </div>

            <div className="about__text">
                <h2 className='title'>Sobre mim</h2>
                <p className="text">Sou desenvolvedor Front-end e o meu foco no momento é trazer as  
                pequenas empresas para o mundo dígital dando oportunidade para que usufruam dos recurços que a web proporciona para agregar, principalmente na captação 
                e fidelização de clientes, tudo isso por um preço acessível e justo.
                Trabalho com as seguintes tecnologias: HTML, CSS, JS e React. </p>
            </div>
        </section>



    )


}

export default About
