import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'


const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <>
    <Navbar expand="lg" className="bg-danger w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand ><Link className='fw-bolder' to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-utensils"></i>  The Regal Elephant</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
          {insideHome &&
            <Nav.Link >
              <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}  style={{width:'500px'}} type='text' className='rounded p-1' placeholder='Search Restaurants Here!!'/>
            </Nav.Link>}
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default Header