import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Visita extends Component {
  constructor(props){
    super(props)
    this.state = {
      enCurso: 0
    }
  }

  render(){
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>fecha ingreso: </ListGroup.Item>
            <ListGroup.Item>Hora: </ListGroup.Item>
            <ListGroup.Item>Nombre: </ListGroup.Item>
            <ListGroup.Item>Cedula: </ListGroup.Item>
            <ListGroup.Item>Motivo: </ListGroup.Item>
            <ListGroup.Item>Dpto visitado: </ListGroup.Item>
            <ListGroup.Item>Dpto visitado: </ListGroup.Item>
            <ListGroup.Item>Estado Visita: </ListGroup.Item>
            <ListGroup.Item>Novedad: </ListGroup.Item>
          </ListGroup>
        </Card>
      </>
    )
  }
}

export default Visita;
