import About from 'components/About';
import 'components/Header';
import Header from 'components/Header';
import Knowledges from 'components/Knowledges';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import './App.css';
import { useState } from 'react';
import { colors } from '@mui/material';

function App() {

  const [atualTheme, setAtualTheme] = useState('black');
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
        backgroundColor: atualTheme,
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

export default App;
