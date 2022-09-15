
import Home from './component/Home';
import Subcatagory from './component/Subcatagory';
import Items from './component/Items';
import Search_items from './component/Search_items';
import Addcard from './component/Addcard';
import Registration from './component/Registration';
import Login from './component/Login';
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
          <Route path="/Search_by_items/:name" element={<Search_items />} />
          <Route path="/registraton" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
