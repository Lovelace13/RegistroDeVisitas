import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
//import registerRequest from './Backend/auth'


function PageRegister () {
  const newUser = { 
    nombre: "",
    apellido: "",
  }
  const [initialValues, setInitialValues] = React.useState(newUser);
  const { register,handleSubmit } = useForm();
  return (
    <Container>
      <h1 className='mt-3 pb-2'>Registro de Usuarios</h1>
      <Form onSubmit={handleSubmit( (values) => {
        console.log(values);
      })}>
        <Form.Group as={Row} className="mb-3" controlId="InputNombre">
          <Form.Label column sm="3">Nombre</Form.Label>
          <Col sm="8">
            <Form.Control 
              type="text" 
              placeholder="nombre de usuario" 
              {...register("nombre", { required: "Nombre es obligatorio" })}/>
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
      </Form>

      <Button variant="primary" as="input" type="submit">
          Registrar
      </Button>{' '}
    </Container>

  )
}

export default PageRegister;



