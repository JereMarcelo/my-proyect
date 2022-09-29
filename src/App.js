import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//importamos los componentes creados
import Inicio from './components/Inicio';
import Tienda from './components/Tienda';
import Items from './components/Items';
import NavbarExample from './components/navegacion/Navbar';
import { Navbar } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
<BrowserRouter>
<Routes>
  <Route path='/' element={<NavbarExample/>}>
    <Route index element={ <Inicio /> } />
    <Route path='tienda' element={ <Tienda /> } />
    <Route path='items' element={ <Items /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
  
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;