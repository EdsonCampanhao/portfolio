import './Header.css';
import './themeButtons.css';

import { BsMoonStars, BsSun } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = (props) => {

    const options = ['Sobre', 'Habilidades', 'Projetos', 'Contatos']

    const openMenu = () => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => button.classList.toggle('desable'))

        document.querySelector('.menu__options').classList.toggle('on')

    }
    const changeTheme = () => {
        const selector = document.querySelector('.selectedTheme');
        selector.classList.toggle('on');

        document.querySelector('.selectedTheme').classList.contains('on') ?
            props.changeAtualTheme('white','black') :
            props.changeAtualTheme('black','white')

    }

    return (
        <section className='header'>

            <div className="menu">
                <div className='menu__buttons' onClick={openMenu}>
                    <HiMenu size={32} className='button' />
                    <AiOutlineClose size={32} className='button desable' />
                </div>
                <nav className='menu__options'>
                    <ul>
                        {options.map((item, index) => <a key={index} href={'/'}><li key={index}>{item}</li></a>)}
                    </ul>
                </nav>
            </div>

            <div className='themeButton' >

                <BsMoonStars onClick={changeTheme} />
                <div className='selectedTheme'></div>
                <BsSun onClick={changeTheme} />

            </div>


        </section >
    )
};

export default Header;