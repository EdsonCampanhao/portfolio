import './Knowledges.css'
import Button from '@mui/material/Button';

import icons from './icons.js'

const Knowledges = () => {
    return (
        <section className='knowledges'>
            {icons.map(icon =>
                <article key={icon.name}>
                    <p>{icon.name}</p>
                    <icon.icon size={32} className='icon' />
                </article>)}

            <section className='button'>
               <a href="https://cursos.alura.com.br/user/edsonlemos0525/fullCertificate/2323bcd680e7db8a229f724efe88a94e"><Button variant="outlined">ver cursos concluídos</Button></a> 
            </section>

        </section>
    )
}
export default Knowledges;




