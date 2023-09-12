
function pageVisitas (props) {
  return (
    <div className='container'>
      <h1>Visitas</h1>
      <h2>#{props.idvisita} - {props.nombre} </h2>
      <span>{props.motivo}</span>
    </div>

  )
}

export default pageVisitas;