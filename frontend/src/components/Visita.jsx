
import { Card, Row } from 'react-bootstrap';
import {ListGroup, Button }from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PaginacionV from "../components/paginacionVisita";

const Visita = ({ visit }) => {
  const [total, setTotal] = useState(0)
  const [listVisit, setListVisit] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [visitPerPage] = useState(2);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastVisit = currentPage * visitPerPage;
  const indexOfFirstVisit = indexOfLastVisit - visitPerPage;
  const currentVisits = visit?.slice(indexOfFirstVisit, indexOfLastVisit);


  return (
    <>
      <Row className="justify-content-center">
        { visit?.map( (visita) => (    
            <Card style={{ width: '18rem' }}>
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
            </Card>      
        ))}
      </Row>
      <PaginacionV visitasPorPag={visitPerPage} totalVisitas={visit?.length} paginate={paginate}/>
    </>
  )

 }

export default Visita;
