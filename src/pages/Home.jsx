import About from 'components/About';
import 'components/Header';
import Header from 'components/Header';
import Knowledges from 'components/Knowledges';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import '../App.css';
import { useState } from 'react';

function Home() {
    const [atualTheme, setAtualTheme] = useState('linear-gradient(180deg, rgba(27,27,30,1) 37%, rgba(63,144,185,1) 90%, rgba(63,144,185,1) 100%)');
    const [atualColor, setAtualColor] = useState('white')

    return (
        <div className="App">
            <header>
                <Header changeAtualTheme={(theme, color) => {
                    setAtualTheme(theme);
                    setAtualColor(color)
                }
                }
                />
            </header>
            <main style={{
                backgroundImage: atualTheme,
                color: atualColor
            }}>
                <About />
                <Knowledges />
                <Projects />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;