import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
// import '../css/Login';

function pageLogin () {
  return (
    <div className='container'>
      <h1>Inicio de sesión</h1>
      <FloatingLabel controlId="floatingInput" label="Email address"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel> 

      <div className='d-flex justify-content-between mx-3 mb-4'>
        <Form.Check 
              type='checkbox'
              id='default-checkbox'
              label='Recordar credenciales'
            />
      </div>

      <Button variant="primary">Iniciar</Button>{' '}
    </div>

  )
}

export default pageLogin;
