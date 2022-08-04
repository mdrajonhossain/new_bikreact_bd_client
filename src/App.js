import Home from './component/Home';
import Subcatagory from './component/Subcatagory';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from "react-router-dom";




const App = () => {





  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/sub_catagory/:id" element={<Subcatagory />} />

        </Routes>
      </Router>
    </>
  )

}

export default App;
