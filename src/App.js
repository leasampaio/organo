import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColobaoradorAdicionado = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColoboradorCadastrado = {colaborador => aoNovoColobaoradorAdicionado (colaborador)}/>
    </div>
  );
}

export default App;

