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
        try {
            additems_data(id)
                .then((res) => {
                    setItems_data(res.items)
                })
        } catch (error) {
            console.error(error);

        }
    }, [additems_data]);

    const addcard = (e) => {
        var sl = 1;
        const add_items = { "id": sl++, "items_id": e.id, "sub_cat_id": e.sub_cat_id, "item_name": e.item_name, "img": e.fontimg, "price": e.regular_price };
        var items = JSON.parse(localStorage.getItem("items") || "[]");
        items.push(add_items);
        localStorage.setItem("items", JSON.stringify(items));
    }


    const shopingcard = () => {
        console.log("shopingcard")
    }



    return (
        <>
            <Header_navber />
            <br />

            <div className="container">
                {items_data.length != 0 ? <div className="items_filter"><input text="text" /></div> : ""}

                
                {items_data.length != 0 ? <div className="catagory_header">Items List <AiFillCaretRight fontSize={23} /></div> : ""}
                <div className="row">
                    {
                        items_data.length != 0 ?
                            items_data.map((dx) => {
                                return (
                                    <div className="col-md-3">
                                        <Card style={{ marginTop: '15px' }}>
                                            <Card.Img variant="top" src={"http://screete.bikretabd.com/items_image_file/" + dx.fontimg} />
                                            <div className="view_count"><AiOutlineEye fontSize={18} /> 25 <AiFillHeart fontSize={16} /> 25 </div>                                            
                                            <div className="items_discount_offer">{parseFloat(100/dx.regular_price*dx.discount_price-100).toFixed(2)}                                            
                                            </div>                                            
                                            <Card.Body>
                                                <center><Card.Title>
                                                    <div className='' style={{ color: '#282222', fontSize: '14px' }}>{dx.item_name}</div>
                                                    <div className='text-info' style={{ fontSize: '18px', marginTop: '10px' }}>
                                                        <span style={{ color: 'rgb(52 126 219)' }}>Tk.{dx.discount_price} </span>
                                                        <span className='text-dark' style={{ fontSize: '12px', textDecoration: 'line-through', textDecorationColor:'red' }}> Tk.{dx.regular_price}</span>
                                                        </div>
                                                    <div className='addcard_div py-3'>
                                                        <div className='container-fluid'>
                                                            <div className='row'>
                                                                <div className='col-md-5 add py-2' onClick={() => addcard(dx)}><MdOutlineShoppingCart /></div>
                                                                <div className='col-md-1'></div>
                                                                <div className='col-md-5 add py-2' onClick={() => shopingcard(dx)}><RiShoppingBasketLine /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Title></center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                            : <div className='empty_sub_catagory'> <FcEmptyTrash fontSize={26} /> <br />No find sub catagory</div>
                    }
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Items;