
import Home from './component/Home';
import Subcatagory from './component/Subcatagory';
import Items from './component/Items';
import Addcard from './component/Addcard';
import Single_view_items from './component/Single_view_items';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate, hashHistory } from "react-router-dom";




const App = () => {



  return (
    <>    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/sub_catagory/:slug/:id" element={<Subcatagory />} />          
          <Route path="/getitems/:slug/:id" element={<Items />} />          
          <Route path="/add-card" element={<Addcard />} />                    
          <Route path="/:items_name/:id" element={<Single_view_items />} />
        </Routes>
      </Router>    
    </>
  )

}

export default App;
