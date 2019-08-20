import React from 'react'
import Header from './Components/Header'
import './Assets/css/Core.css'
import './Assets/js/scripts'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//PAGINAS
import Home from './Paginas/home'
import Usuarios from './Paginas/usuarios'
import AddCompra from './Paginas/addCompra'
import AddUsuario from './Paginas/addUsuario'
import Sair from './Components/sair'
import Erro from './Paginas/404'
import Login from './Paginas/login'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className="body">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/usuarios" component={Usuarios}/>
          <Route path="/login" component={Login}/>
          <Route path="/addCompra" component={AddCompra}/>
          <Route path="/addUsuario" component={AddUsuario}/>
          <Route path="/sair" component={Sair}/>
          <Route component={Erro} />
        </Switch>
      </div>     
    </div>
    </BrowserRouter>
  );
}

export default App;
