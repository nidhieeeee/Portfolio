
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import './App.css'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {

  return (
    <div className='main'>
      <Router>
  <Routes>
    <Route path="/" element={<LandingPage  />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/home" element={<LandingPage />} />
    <Route path="/contactus" element={<ContactUs />} />
  </Routes>
</Router>
     </div>
  )
}

export default App
