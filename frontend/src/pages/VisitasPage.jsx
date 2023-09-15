import MenuVisitas from "../components/menuVisita";
import PaginacionV from "../components/paginacionVisita";
import Visita from "../components/Visita";
import { useState, useEffect } from 'react';
import usePetitionGet from "../hooks/usePetitionGet"
import axios from "axios";


function pageVisitas () {
  const [visitas, cargandoVisitas] = usePetitionGet(`/visitas`)

  return (
    <div className='container'>
      <MenuVisitas></MenuVisitas>
      <h1>Visitas Registradas</h1>

      <Visita visit={ visitas }></Visita>
      {/* <PaginacionV/> */}
    </div>

  )
}

export default pageVisitas;