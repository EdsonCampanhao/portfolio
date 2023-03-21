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
                    <Button className='button' variant="contained" >
                        baixar currículo
                    </Button>
                    <Button className='button' variant="outlined" >
                        entrar em contato
                    </Button>
                </div>
            </div>

            <div className="about__text">
                <h2 className='title'>Sobre mim</h2>
                <p className="text">Desenvolvedor Front-end com experiência em React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis. Formado em Sistemas de Informação e cursando Especialização em Front-End na Digital House Brasil.</p>
            </div>
        </section>



    )
}

export default About
