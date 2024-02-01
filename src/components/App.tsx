
import '../css/App.css'
import  Header  from "./Header"
import Links from './Links'
import Publications from './Publications'
import Research from './Research'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Team from './Team'
import Footer from './Footer'
import Home from './Home'

function App() {
  
  return (
    <>
   
    <Router>
      
    <Header/>
   
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/Research" element={<Research/>}/>
      <Route path="/publications" element={<Publications/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/links" element={<Links/>}/>
    </Routes>
  
    <Footer/>
    </Router>
      
    </>
  )
}

export default App
