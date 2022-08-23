
import '../App.css';
import '../Web.css';
import '../Mobile.css';
import React, { useState, useEffect, useRef } from 'react'

import { Link, useNavigate, useLocation } from "react-router-dom";

import OutsideClickHandler from 'react-outside-click-handler';
import { AiOutlineMenu } from "react-icons/ai";
import { cat_getdata, add_card_items_local_data, subcat_getdata } from '../api/api';
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FaLock } from "react-icons/fa";

import { BiPencil } from "react-icons/bi";



const Header_navber = () => {
  const location = useLocation();


  const [show, setShow] = useState(false);
  const [dropcat, setDropcat] = useState([]);
  const [localdata, setLocaldata] = useState('');
  const [is_item, setIs_item] = useState(false);
  const [subcatagory_getapi, setSubcatagory_getapi] = useState([]);


  const navigate = useNavigate();


  useEffect(() => {
    try {
      const dd = location.pathname;
      const splitString = dd.split("/");
      if (splitString[1] === 'getitems') {
        setIs_item(true)
      } else {
        setIs_item(false)
      }
    } catch (error) {
      console.error(error);
    }
  }, []);




  useEffect(() => {
    cat_getdata()
      .then((res) => {
        setDropcat(res.cat_data);
      })
  }, [])



  // sub_catagory_get api start
  useEffect(() => {
    subcat_getdata()
      .then((res) => {
        setSubcatagory_getapi(res.sub_cat_data);
      })
  }, [])
  // sub_catagory_get api end






  useEffect(() => {
    setInterval(function () {
      add_card_items_local_data()
        .then((res) => {
          setLocaldata(res.length);
        })
    }, 100);
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
              <span> <BiPhoneCall size={20} /> 01985 49 21 51(9am-10pm)</span>
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

          <div className='col-md-4'> 
            <input type="text" className="search" /> 
          </div>


          <div className='col-md-4'>
            <img src={require("./offer.jpg")} width="300" height="70" alt="offer avater" style={{ padding: '8px 0px 0px 5px', marginLeft: '91px' }}></img>
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
            <div className="web drops" onClick={() => setShow(!show)} style={{ width: '', padding: '18px' }}>
              {is_item ? "Shop By Sub_Catagory" : "Shop By Catagory"}
            </div>

            {show ?
              <div className="up_down_header_toggle_icon" onClick={() => setShow(!show)}><AiOutlineCaretDown /></div>
              :
              <div className="up_down_header_toggle_icon_roted" onClick={() => setShow(!show)}><AiOutlineCaretDown /></div>
            }

            {show ?
              <div className="article">

                {
                  is_item ?
                    subcatagory_getapi.map((dx) => {
                      return (
                        <>
                          <Link to={`/getitems/${dx.slug}/${dx.id}`}>
                            <div className="cat_list"><img src={"http://screete.bikretabd.com/subcatagory/" + dx.sub_catagory_img} style={{ borderRadius: '25px' }} /> {dx.name}</div>
                          </Link>
                        </>
                      )
                    })
                    :
                    dropcat.map((dx) => {
                      return (
                        <>
                          <Link to={`/sub_catagory/${dx.slug}/${dx.id}`}>
                            <div className="cat_list"><img src={"http://screete.bikretabd.com/catagory/" + dx.catagory_img} style={{ borderRadius: '25px' }} /> {dx.name}</div>
                          </Link>
                        </>
                      )
                    })


                }

              </div>
              : ''}
          </OutsideClickHandler>
          <div className="web h_menu"><Link to="/">Home</Link></div>
          <div className="web h_menu"><Link to="/">About</Link></div>
          <div className="web h_menu"><Link to="/">Blog</Link></div>
          <div className="web h_menu"><Link to="/">Contact</Link></div>

          <div className="right_side_menu">
            <div className="web h_menu"><Link to="/add-card"> {localdata === 0 ? <span style={{ color: 'white' }}>{localdata}</span> : <span style={{ color: 'red' }}>{localdata}</span>}  Items <MdOutlineShoppingCart size={22} /></Link></div>
            <div className="web h_menu myaccount_navber">My Account < FaUserCircle size={24} />
              <div className="myaccount">
                <Link to="/registraton"><div className="li_account"><BiPencil /> Registration</div></Link>
                <Link to="/login"><div className="li_account"><FaLock size={14} /> &nbsp;Login</div></Link>
              </div>
            </div>



          </div>
        </div>

      </div>




    </>
  );
}

export default Header_navber;
