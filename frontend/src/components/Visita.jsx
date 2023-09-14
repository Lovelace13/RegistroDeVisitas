
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

const Visita = (props) => {
  const [state, setState ] = useState({
    enCurso: 1
  })

  const setEnCurso = (e) => {
    setState({
      ...state,
      enCurso: e.target.value
    })
  }
  
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>fecha ingreso: {props.fechaIng} </ListGroup.Item>
          <ListGroup.Item>Hora: {props.hora}</ListGroup.Item>
          <ListGroup.Item>Nombre: {props.nombre} </ListGroup.Item>
          <ListGroup.Item>Cedula: {props.ced}</ListGroup.Item>
          <ListGroup.Item>Motivo: {props.motivo} </ListGroup.Item>
          <ListGroup.Item>Dpto visitado: {props.dep}</ListGroup.Item>
          <ListGroup.Item>Estado Visita: {setEnCurso} </ListGroup.Item>
          <ListGroup.Item>Novedad: {props.novedad}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  )

 }

export default Visita;
