
import '../App.css';
import React, { useState, useEffect, useRef } from 'react'

import { Link, useNavigate } from "react-router-dom";

import OutsideClickHandler from 'react-outside-click-handler';
import { AiOutlineMenu } from "react-icons/ai";
import { cat_getdata } from '../api/api';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";






const Header_navber = () => {
  const [show, setShow] = useState(false);
  const [dropcat, setDropcat] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    cat_getdata()
      .then((res) => {
        setDropcat(res.cat_data);
      })
  }, [])





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
          <div className="mobile"><AiOutlineMenu fontSize={25} /></div>
          <div className="mobile">Bikretabd.com</div>
          <div className="mobile"><AiOutlineMenu fontSize={25} /></div>
        </div>

        <div className="web_mnu">


          <OutsideClickHandler onOutsideClick={() => setShow(false)}>
            <div className="web drops" onClick={() => setShow(!show)} style={{ width: '', padding: '18px' }}> Shop By Catagory </div>            {show ?
              <div className="article">
                {dropcat.map((dx) => {
                  return (
                    <>
                      <Link to={`/sub_catagory/${dx.slug}/${dx.id}`}>
                        <div className="cat_list"><img src={"http://screete.bikretabd.com/catagory/" + dx.catagory_img} /> {dx.name}</div>
                      </Link>
                    </>
                  )
                })}
              </div>
              : ''}
          </OutsideClickHandler>
          <div className="web h_menu"><Link to="/">Home</Link></div>
          <div className="web h_menu"><Link to="/">About</Link></div>
          <div className="web h_menu"><Link to="/">Blog</Link></div>
          <div className="web h_menu"><Link to="/">Contact</Link></div>

          <div className="right_side_menu">
            <div className="web"><Link to="/"> 0 Items <MdOutlineShoppingCart size={22}/></Link></div>
            <div className="web"><Link to="/">MyAccount < FaUserTie size={22} /></Link></div>
          </div>
        </div>

      </div>




    </>
  );
}

export default Header_navber;
