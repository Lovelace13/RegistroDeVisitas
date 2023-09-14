//import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import pageLogin from './pages/LoginPage'
import PageRegister from './pages/RegisterPage'
import pageVisitas from './pages/VisitasPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={pageLogin}/>
          <Route path='/Login' Component={pageLogin}/>
          <Route path='/nuevoUsuario' Component={PageRegister}/>
          <Route path='/Supervisor' element={<h1>Supervisor</h1>}/>
          <Route path='/Recepcion' element={<h1>Recepcion</h1>}/>
          <Route path='/Visitas' Component={pageVisitas}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
