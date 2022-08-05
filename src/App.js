import Home from './component/Home';
import Subcatagory from './component/Subcatagory';
import Items from './component/Items';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from "react-router-dom";




const App = () => {





  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/sub_catagory/:id" element={<Subcatagory />} />          
          <Route path="/getitems/:id" element={<Items />} />          
        </Routes>
      </Router>
    </>
  )

}

export default App;
