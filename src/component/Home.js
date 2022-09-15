import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Carousels from './Carousels';
import Header_navber from './Header_navber';
import Catagory_list from './Catagory_list';
import Fooder from './Fooder';
import React, { useState, useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Header_navber />
            <br />
            <Carousels />
            <br />
            <Catagory_list />
            <br />
            <Fooder />
        </>
    )
}




export default Home;