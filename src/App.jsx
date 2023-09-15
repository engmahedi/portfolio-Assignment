import { BrowserRouter, Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ContactPage from "./Pages/ContactPage"
import GallaryPage from "./Pages/GallaryPage"


const App=()=>{
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/contact" element={<ContactPage /> } />
          <Route path="/gallary" element={<GallaryPage /> } />
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
