import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';






const Single_view_items = () => {
   
 

    return (
        <>
            <Header_navber />
            <br />
 
 Single Items view



            <br />
            <Fooder />
        </>
    )
}




export default Single_view_items;