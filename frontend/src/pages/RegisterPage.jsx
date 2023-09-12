import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function pageRegister () {
  return (
    <div className='container'>
      <h1>Registro de Usuarios</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="InputNombre">
          <Form.Label column sm="3">Nombre</Form.Label>
          <Col sm="8">
            <Form.Control type="text" placeholder="nombre de usuario" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="InputApellido">
          <Form.Label column sm="3">Apellido</Form.Label>
          <Col sm="8">
            <Form.Control type="text" placeholder="apelldio del usuario" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="InputContraseña">
          <Form.Label column sm="3">Rol de Usuario</Form.Label>
          <Col sm="8">
            <Form.Select aria-label="Select Rol">
              <option value="S">Supervisor</option>
              <option value="R">Recepcionista</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="InputCorreo">
          <Form.Label column sm="3">Correo Electronico</Form.Label>
          <Col sm="8">
            <Form.Control type="email" placeholder="name@correo.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="InputContraseña">
          <Form.Label column sm="3">Contraseña</Form.Label>
          <Col sm="8">
            <Form.Control type="text" placeholder="password" />
          </Col>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group> */}
      </Form>

      <Button variant="primary">Registrar</Button>{' '}
    </div>

  )
}

export default pageRegister;



