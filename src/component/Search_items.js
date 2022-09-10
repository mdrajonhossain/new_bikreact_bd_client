import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link, useLocation } from "react-router-dom";
import { searchitmes } from '../api/api';
import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import { AiOutlineEye, AiFillHeart, AiFillCaretRight } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";



const Search_items = () => {
    const location = useLocation();
    const [searchitems, setSearchitems] = useState([]);



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    useEffect(() => {
        try {
            searchitmes(location.state.searchdata)
                .then((res) => {
                    setSearchitems(res.items)
                })
        } catch (error) {
            console.error(error);
        }
    }, [location.state.searchdata]);


    const addcard = (e) => {
        var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");

        if (add_items.length === 0) {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
            const items = [{ "item_name": e.item_name, "img": e.fontimg, "price": e.discount_price, "qnt": 1 }];
            localStorage.setItem("add_items", JSON.stringify(items));
        } else {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");

            var mach = add_items.filter((dt) => {
                return dt.item_name.match(e.item_name)
            })
            if (mach.length === 0) {
                var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
                add_items.push({ "item_name": e.item_name, "img": e.fontimg, "price": e.discount_price, "qnt": 1 });
                localStorage.setItem("add_items", JSON.stringify(add_items));
            } else {
                var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
                var index = add_items.findIndex(x => x.item_name === e.item_name);
                add_items[index].qnt = add_items[index].qnt + 1;
                localStorage.setItem("add_items", JSON.stringify(add_items));
            }
        }
    }


    const shopingcard = () => {
        console.log("shopingcard")
    }

    return (
        <>
            <Header_navber />
            <br />

            <div className="container">


                <div className="row">
                    {
                        searchitems.length != 0 ?
                            searchitems.map((dx) => {
                                return (
                                    <div className="col-md-2 col-6">
                                        <Card style={{ marginTop: '15px' }}>
                                            <Link to={`/${dx.slug}/${dx.id}`}>
                                                <Card.Img variant="top" src={"http://screete.bikretabd.com/items_image_file/" + dx.fontimg} />
                                                <div className="view_count"><AiOutlineEye fontSize={18} /> 25 <AiFillHeart fontSize={16} /> 25 </div>
                                            </Link>
                                            {dx.discount_price != dx.regular_price && <div className="items_discount_offer_line">OFF</div>}
                                            {dx.discount_price != dx.regular_price &&
                                                <div className="items_discount_offer">{parseFloat(100 / dx.regular_price * dx.discount_price - 100).toFixed(0).replace('-', '')}%</div>
                                            }

                                            <center><Card.Title>
                                                <div className='p-2' style={{ fontSize: '15px', color: '#282222' }}>{dx.item_name}</div>
                                                <div className='text-info' style={{ fontSize: '18px', marginTop: '10px' }}>
                                                    {dx.discount_price != dx.regular_price &&
                                                        <span className='text-dark' style={{ fontSize: '14px', textDecoration: 'line-through', textDecorationColor: 'red' }}> Tk.{dx.regular_price}</span>
                                                    }
                                                    <span style={{ color: 'rgb(52 126 219)' }}> Tk.{dx.discount_price} </span>
                                                </div>
                                                <div className='addcard_div py-3'>
                                                    <div className='container-fluid'>
                                                        <div className='row'>
                                                            <div className='col-md-4 border border-1 col-4  add py-2' onClick={() => addcard(dx)}><MdOutlineShoppingCart /></div>
                                                            <div className='col-md-4 col-4'></div>
                                                            <div className='col-md-4 border border-1 col-4 add py-2' onClick={() => shopingcard(dx)}><RiShoppingBasketLine /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Title></center>
                                        </Card>
                                    </div>
                                )
                            })
                            : <div className='empty_sub_catagory'>   <br />Searching Items not found</div>
                    }
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Search_items;