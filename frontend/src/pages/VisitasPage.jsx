
import MenuVisitas from "../components/menuVisita";
import PaginacionV from "../components/paginacionVisita";
import Visita from "../components/Visita";

function pageVisitas (props) {
  // { numVisita, nombreVisita, movitoVisita }
  return (
    <div className='container'>
      <MenuVisitas></MenuVisitas>
      <h1>Visitas</h1>
      <h2>#{props.idvisita} - {props.nombre} </h2>
      <span>{props.motivo} motivo</span>
      <Visita></Visita>
      <PaginacionV/>
    </div>

  )
}

export default pageVisitas;