import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Row, Col, Card, Button, Spinner, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/slices/productSlice'; // Assuming fetchProducts is defined here
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, error, loading } = useSelector((state) => state.productReducer);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatching the fetchProducts action
  }, [dispatch]);

  // Get current products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = allProducts?.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: '100px' }} className='container-fluid'>
        {loading ? (
          <div className='text-center mt-5 fw-bolder'>
            <Spinner animation='border' variant='danger' />
            Loading...
          </div>
        ) : (
          <>
            <Row className='mt-5'>
              {currentProducts?.length > 0 ? (
                currentProducts?.map((product) => (
                  <Col key={product?.id} sm={12} md={6} lg={4} xl={3} className='mb-5 rounded-5 d-flex justify-content-center justify-content-md-center align-items-center flex-wrap'>
                    <Card style={{ width: '18rem' }} className='shadow rounded'>
                      <Card.Img height={'400px'} variant='top' src={product?.photograph} />
                      <Card.Body className='text-center mt-3'>
                        <Card.Title style={{ fontSize: '20px', fontWeight: '800' }}>{product?.name.slice(0, 20)}</Card.Title>
                        <Card.Title style={{ fontSize: '14px' }}>{`City: ${product.neighborhood}`}</Card.Title>
                        <Card.Title style={{ fontSize: '11px' }}>{`Type: ${product.cuisine_type}`}</Card.Title>
                        <Link to={`/${product?.id}/view`}>
                          <Button className='btn btn-danger'>View More</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <div className='fw-bolder text-center mt-5 mb-5 text-danger'>Restaurant Not Found!!!</div>
              )}
            </Row>
            <Pagination className='justify-content-center'>
              {Array.from({ length: Math.ceil(allProducts.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
