import './App.css';
import { colaboradores } from './colaboradores'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Colaboradores:</h1>
        {
          colaboradores.map((colab)=>(
            <div className="card">
              <p className="name">{colab.name}</p>
              <p className="title">{colab.title}</p>
              <p className="bio">{colab.bio}</p>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
