import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const NewVisit = () => {
  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="InputFecha">
          <Form.Label column sm="3">Fecha de Ingreso</Form.Label>
          <Col sm="8">
          <Form.Control type="date" value="YYYY-MM-DD" />
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
        <Form.Group className="mb-3" controlId="textMotivo">
          <Form.Label>Motivo de Visita</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="primary">Registrar</Button>{' '}
    </>
  )
}

export default NewVisit;
