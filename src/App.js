import Home from './component/Home';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from "react-router-dom";




const App = () => {





  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
