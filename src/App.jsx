import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import View from './Pages/View'



function App() {
  

  return (
    <>
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/:id/view" element={<View />}  />
      <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App
