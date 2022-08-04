
import '../App.css';
import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";



const Header_navber = () => {
  const clickref = useRef();


  const openMenu = () => {
    if (clickref.current.className === 'article') {
      clickref.current.classList.remove('article');
      clickref.current.classList.add('show');
    } else {
      clickref.current.classList.remove('show');
      clickref.current.classList.add('article');
    }

  }





  return (
    <>
      <div className='top_header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 text-light pt-1'>
              <span>Online Shopping Site in Bangladesh</span>
            </div>
            <div className='col-md-4 text-light pt-1'>
              <span>01985492151(9am-10pm)</span>
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>

      </div>

      <div className='container-fluid header_offer_image'>
        <div className='row'>
          <div className='col-md-4 logo'>
            <Link to="/">
              <img src={require("./logo.png")} width="200" style={{ padding: '5px' }} alt="logo avater" />
            </Link>
          </div>

          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <img src={require("./offer.jpg")} width="300" height="70" style={{ padding: '8px 0px 0px 5px' }} alt="offer avater" />
          </div>
        </div>
      </div>


      <div className="main">
        <div className="mobile_mnu">
          <div className="mobile">Home</div>
          <div className="mobile">Bikretabd.com</div>
          <div className="mobile">Login</div>
        </div>

        <div className="web_mnu">
          <div className="web" onClick={() => openMenu()} style={{ backgroundColor: '#682222', padding: '18px' }}>Shop By Catagory</div>
          <div className="article" ref={clickref}>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
            <div className="cat_list">Catagory</div>
          </div>
          <div className="web h_menu"><Link to="/">Home</Link></div>
          <div className="web h_menu"><Link to="/about">About</Link></div>
          <div className="web h_menu">Blog</div>
          <div className="web h_menu">Contact</div>
        </div>
      </div>




    </>
  );
}

export default Header_navber;
