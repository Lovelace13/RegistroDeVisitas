

import { Card, Row } from 'react-bootstrap';
import {ListGroup, Button }from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Visita = ({ visit }) => {

  
  return (
    <>
    <Row className="justify-content-center">
    < Card style={{ width: '18rem' }}>
        { visit?.map( (visita) => (
          <ListGroup key={visita.idvisita} variant="flush">
            <ListGroup.Item>fecha ingreso: {visita.fechaingreso} </ListGroup.Item>
            <ListGroup.Item>Hora: {visita.hora}</ListGroup.Item>
            <ListGroup.Item>Nombre: {visita.nombre} </ListGroup.Item>
            <ListGroup.Item>Cedula: {visita.cedula}</ListGroup.Item>
            <ListGroup.Item>Motivo: {visita.motivo} </ListGroup.Item>
            <ListGroup.Item>Dpto visitado: {visita.departamento}</ListGroup.Item>
            <ListGroup.Item>Estado Visita: {visita.estado} </ListGroup.Item>
            <ListGroup.Item>Novedad: {visita.novedad}</ListGroup.Item>
  
          </ListGroup>
        ))}
      </Card>
    </Row>
      
      
      {/* <Button variant="info" onClick={()=>cambiarNovedad()}>Actualizar novedad</Button>{' '} */}
    </>
  )

 }

export default Visita;
