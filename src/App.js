import About from 'components/About';
import 'components/Header';
import Header from 'components/Header';
import Knowledges from 'components/Knowledges';
import './App.css';

function App() {
  return (
    <div className="App">
  <header>
     <Header itens={['Sobre','Habilidades','Projetos','Contatos']} />
  </header>
  <main>
    <About/>
    <Knowledges/>
  </main>
    </div>
  );
}

export default App;
