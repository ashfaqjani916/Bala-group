
import '../css/App.css'
import  Header  from "./Header"
import Links from './Links'
import Publications from './Publications'
import Research from './Research'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Team from './Team'

function App() {
  

  return (
    <>
    <Router>

      <Header/>
      <Research/>
      <Publications/> 
      <Links/>
      <Team/>
    
    </Router>
    </>
  )
}

export default App
