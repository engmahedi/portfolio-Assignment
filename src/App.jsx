import {  Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ContactPage from "./Pages/ContactPage"
import GallaryPage from "./Pages/GallaryPage"


const App=()=>{
  

  return (
    <>
      
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/contact" element={<ContactPage /> } />
          <Route path="/gallary" element={<GallaryPage /> } />
        </Routes>
      
      
      
    </>
  )
}

export default App;
