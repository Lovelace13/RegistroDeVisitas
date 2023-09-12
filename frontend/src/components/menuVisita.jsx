import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NewVisit from '../components/nuevaVisita'

const MenuVisitas = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Recepcion de Visitas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/nuevaVista">Registrar nueva Visita</Nav.Link>
            <Nav.Link href="#link">Visualizar total de visitas</Nav.Link>
            <NavDropdown title="Editar una Visita" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Agregar Novedad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cambiar estado de visita
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Eliminar visita (reservado)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuVisitas;