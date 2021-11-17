import './App.css';

//Componentes
import DetallesSismos from './components/DetallesSismos';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <DetallesSismos 
          fecha = "2021-11-17 14:22:22"	
          latitud = "-23.480"	
          longitud = "-67.970"	
          profundidad = "155.8"	
          magnitud = "3.2 Ml"	
          ref_geografica = "15 km al NO de Socaire"
        />
      </body>
    </div>
  );
}

export default App;
