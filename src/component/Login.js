import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { single_items } from '../api/api';






const Login = () => {
      

    return (
        <>
            <Header_navber />
            <br />

            Login


            <br />
            <Fooder />
        </>
    )
}




export default Login;