import About from 'components/About';
import 'components/Header';
import Header from 'components/Header';
import Knowledges from 'components/Knowledges';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header itens={['Sobre', 'Habilidades', 'Projetos', 'Contatos']} />
      </header>
      <main>
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
