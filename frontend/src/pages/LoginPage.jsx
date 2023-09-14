import { Form , Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import API_URL from '../configs/configApi'
import { useNavigate } from 'react-router-dom';
// import '../css/Login'; 

function pageLogin () {
  const [user, setUser] = useState({ email: "", contraseña: ""})

  const navegador = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    axios.post(`${API_URL}/authRouter/login`, user)
    .then(data => {
      console.log(data)
      localStorage.setItem("llave", data.data)
      navegador("/Visitas")
    })
    .catch( function (error) {
      if (error.response.status = 400){ alert(error.response.data.msg) }
    })
  }

  return (
    <div className='container'>
      <h1 className='mt-3 pb-2'>Inicio de sesión</h1>
      <Form onSubmit={submit}>
        <FloatingLabel controlId="floatingInput" label="Email address"
          className="mb-3">
          <Form.Control required onChange={(e) => setUser({
            ...user, email: e.target.value})}
              type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control required onChange={ (e) => setUser({
            ...user, contraseña: e.target.value})} 
          type="password" placeholder="Password" />
        </FloatingLabel> 

        <div className='d-flex justify-content-between mx-3 mb-4'>
          <Form.Check 
                type='checkbox'
                id='default-checkbox'
                label='Recordar credenciales'
              />
        </div>

        <Button variant="primary" type="submit">Iniciar</Button>{' '}
        </Form>
    </div>

  )
}

export default pageLogin;
