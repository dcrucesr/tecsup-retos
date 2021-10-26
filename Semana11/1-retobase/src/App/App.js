
import './App.css';
import Home from '../Vistas/Home/Home';
import Admin from '../Vistas/Admin/Admin';
import { Switch, Route } from "react-router";
import Header from "../Componentes/Header/Header";
import { ProveedorDeTemaLink } from "../EstadoGlobal/Context/ThemeContext";
function App() {
  return (
    <>
    <ProveedorDeTemaLink>
      <Header />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/Admin"><Admin/></Route>
      </Switch>
    </ProveedorDeTemaLink>
    </>
  );
}

export default App;
