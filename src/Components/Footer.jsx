import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <div style={{height:'350px'}} className='container-fluid w-100 mt-5 bg-danger '>
      <div className='d-flex justify-content-between pt-5 '>
        <div  style={{width:'300px',color:'white'}} className='intro'>
          <h5><i className="fa-solid fa-utensils"></i> The Regal Elephant</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque laboriosam sint commodi sequi, sapiente </p>
          <p>Code licensed Luminar, docs CC By 3.0</p>
          <p>Currently v5.3.2</p>

        </div>
        <div className='links d-flex flex-column' style={{color:'white'}}>
          <h5>Link</h5>
          <Link to = {'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          
        </div>
        <div className='guides d-flex flex-column' style={{color:'white'}}>
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
        </div>
        <div className='contact d-flex flex-column' style={{color:'white'}}>
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input placeholder='Enter your Email here' type="text"  className='form-control'/>
            <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='icons d-flex justify-content-between mt-3'>
          
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-github"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>

      </div>
    <p className='text-center mt-5' style={{color:'white'}}>Copyright © Jan Batch 2024 The Regal Elephant.Built with React.</p>
    </div>
    
  )
}

export default Footer