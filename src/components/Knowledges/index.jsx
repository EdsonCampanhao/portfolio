import './Knowledges.css'

import icons from './icons.js'

const Knowledges = () => {
    return (
        <section className='knowledges'>
            {icons.map(icon =>
                <article key={icon.name}>
                    <p>{icon.name}</p>  
                    <icon.icon size={32} className='icon'/>
                </article>)}
        </section>
    )
}
export default Knowledges;

