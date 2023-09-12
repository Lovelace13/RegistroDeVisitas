//import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import pageLogin from './pages/LoginPage'
import pageRegister from './pages/RegisterPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Registro Visitas</h1>}/>
          <Route path='/Login' Component={pageLogin}/>
          <Route path='/nuevoUsuario' Component={pageRegister}/>
          <Route path='/Supervisor' element={<h1>Supervisor</h1>}/>
          <Route path='/Recepcion' element={<h1>Recepcion</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
