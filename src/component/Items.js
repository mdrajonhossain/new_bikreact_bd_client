import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import { additems_data } from '../api/api';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiFillHeart, AiFillCaretRight } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import { FcEmptyTrash } from "react-icons/fc";

import { MdOutlineShoppingCart } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";




const Items = () => {
    const [items_data, setItems_data] = useState([]);
    let { id } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    useEffect(() => {
        try {
            var baseUrl = window.location.href;
            var id = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
            additems_data(id)
                .then((res) => {
                    setItems_data(res.items)
                })
        } catch (error) {
            console.error(error);
        }
    }, [id]);



    var a = 1;
    const addcard = (e) => {
        var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");

        if (add_items.length === 0) {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
            const items = [{ "item_name": e.item_name, "img": e.fontimg, "price": e.regular_price, "qnt": 1 }];
            localStorage.setItem("add_items", JSON.stringify(items));
        } else {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");

            var mach = add_items.filter((dt) => {
                return dt.item_name.match(e.item_name)
            })
            if (mach.length === 0) {
                var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
                add_items.push({ "item_name": e.item_name, "img": e.fontimg, "price": e.regular_price, "qnt": 1 });
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
                {items_data.length != 0 ? <div className="items_filter">

                    {/* <input type="range" class="form-range" id="customRange1"/> */}

                </div>
                    : ""}


                {items_data.length != 0 ? <div className="catagory_header">Items List <AiFillCaretRight fontSize={23} /></div> : ""}
                <div className="row">
                    {
                        items_data.length != 0 ?
                            items_data.map((dx) => {
                                return (
                                    <div className="col-md-2 col-6">
                                        <Card style={{ marginTop: '15px' }}>
                                            <Link to={`/${dx.slug}/${dx.id}`}>
                                                <Card.Img variant="top" src={"http://screete.bikretabd.com/items_image_file/" + dx.fontimg} />
                                                <div className="view_count"><AiOutlineEye fontSize={18} /> 25 <AiFillHeart fontSize={16} /> 25 </div>
                                            </Link>
                                            <div className="items_discount_offer_line">OFF</div>
                                            <div className="items_discount_offer">{parseFloat(100 / dx.discount_price * dx.regular_price - 100).toFixed(0)}%</div>

                                            <center><Card.Title>
                                                <div className='p-2' style={{ fontSize: '15px', color: '#282222' }}>{dx.item_name}</div>
                                                <div className='text-info' style={{ fontSize: '18px', marginTop: '10px' }}>
                                                    <span className='text-dark' style={{ fontSize: '14px', textDecoration: 'line-through', textDecorationColor: 'red' }}> Tk.{dx.regular_price}</span>
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
                            : <div className='empty_sub_catagory'> <FcEmptyTrash fontSize={26} /> <br />Not found</div>
                    }
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Items;