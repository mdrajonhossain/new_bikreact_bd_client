import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link, useLocation } from "react-router-dom";
import { additems_data } from '../api/api';
import React, { useState, useEffect } from 'react';





const Search_items = () => {
    const location = useLocation();
  


    console.log(location.state.searchdata)

    return (
        <>
            <Header_navber />
            <br />

            <div className="container">

            
            {location.state.searchdata}


            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Search_items;