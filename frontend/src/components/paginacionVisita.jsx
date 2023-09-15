import Pagination from 'react-bootstrap/Pagination';

const PaginacionV = ({ visitasPorPag, totalVisitas, paginate}) => {
  const pageNumbers = [];

  for (let number = 1; number <= Math.ceil(totalVisitas / visitasPorPag); number++) {
    pageNumbers.push(number);
  }
  

  return (
    <div>
      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item key={number} onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
      <br />
    </div>
  );
}


export default PaginacionV;