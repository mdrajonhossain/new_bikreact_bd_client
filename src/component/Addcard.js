import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import { additems_data } from '../api/api';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { add_card_items_local_data, items_get } from '../api/api';
import OutsideClickHandler from 'react-outside-click-handler';
import Order_now from './Order_now';
import Card from 'react-bootstrap/Card';



import { MdOutlineShoppingCart } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineEye, AiFillHeart, AiFillCaretRight } from "react-icons/ai";
import { FcEmptyTrash } from "react-icons/fc";





const Addcard = () => {
    const [loca_adddata, setLoca_adddata] = useState([]);
    const [quntitycounter, setQuntitycounter] = useState();
    const [login, setLogin] = useState(false);

    const [ordershow, setOrdershow] = useState(false);
    const [items_data, setItems_data] = useState([]);



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        setInterval(function () {
            add_card_items_local_data()
                .then((res) => {
                    setLoca_adddata(res);
                })
        }, 100);
    }, [])


    const delet = (e) => {
        const add_items = JSON.parse(localStorage.getItem("add_items"));
        add_items.splice(e, 1);
        localStorage.setItem('add_items', JSON.stringify(add_items));
    }

    const itemscounter = (e) => {
        if (e[1] === 'incre') {
            var data = JSON.parse(localStorage.getItem("add_items") || "[]");
            var index = data.findIndex(x => x.item_name === e[0].item_name);
            data[index].qnt = data[index].qnt + 1;
            localStorage.setItem("add_items", JSON.stringify(data));

        }
        if (e[1] === 'decre') {
            var data = JSON.parse(localStorage.getItem("add_items") || "[]");
            var index = data.findIndex(x => x.item_name === e[0].item_name);

            if (data[index].qnt > 1) {
                data[index].qnt = data[index].qnt - 1;
            }
            localStorage.setItem("add_items", JSON.stringify(data));

        }
    }


    const addcard = (e) => {
        var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");

        if (add_items.length === 0) {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
            const items = [{ "item_name": e.item_name, "img": e.fontimg, "price": e.discount_price, "qnt": 1, items_id: e.id }];
            localStorage.setItem("add_items", JSON.stringify(items));
        } else {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");

            var mach = add_items.filter((dt) => {
                return dt.item_name.match(e.item_name)
            })
            if (mach.length === 0) {
                var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
                add_items.push({ "item_name": e.item_name, "img": e.fontimg, "price": e.discount_price, "qnt": 1, items_id: e.id });
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



    useEffect(() => {
        setInterval(function () {
            var phone = JSON.parse(localStorage.getItem("client_user") || "[]");
            if (phone[1]) {
                setLogin(true)
            } else {
                setLogin(false)
            }
        }, 100);
    }, [])




    useEffect(() => {
        items_get()
            .then((res) => {
                setItems_data(res.items_data);
            })
    }, [items_data])



    return (
        <>
            <Header_navber />
            <br />
            <div className="container">
                <div className="row">








                    <div className="col-md-6 col-12">
                        <div className="row">
                            {
                                items_data.map((dx, index) => {
                                    if (index < 6) {
                                        return (
                                            <div className="col-md-4 col-6">
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
                                    }
                                }).reverse()

                            }
                        </div>

                    </div>


                    <div className="col-md-6 col-12">
                        <OutsideClickHandler onOutsideClick={() => setOrdershow(false)}>
                            <center>
                                {loca_adddata.length != 0 ?
                                    !login ?
                                        <Link to="/login"><button type="button" class="add-add-to-checkout">CheckOut</button></Link>
                                        :
                                        <button type="button" onClick={() => setOrdershow(true)} class="add-add-to-checkout">CheckOut</button>
                                    : ''}
                            </center>
                            {ordershow ?
                                <Order_now setOrdershow={setOrdershow} />
                                : ' '}
                        </OutsideClickHandler>
                        <br />
                        {loca_adddata.length != 0 ?
                            <Table bordered hover style={{ fontSize: '12px' }}>
                                <tbody>
                                    {

                                        loca_adddata.map((data, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <img width="45" height="40" src={"http://screete.bikretabd.com/items_image_file/" + data.img} />
                                                        </td>
                                                        <td>{data.item_name}</td>
                                                        <td>
                                                            <span onClick={() => itemscounter([data, 'decre'])} style={{ fontSize: '14px', cursor: 'pointer', padding: '5px' }}>-</span>
                                                            <span>{data.qnt}</span>
                                                            <span onClick={() => itemscounter([data, 'incre'])} style={{ fontSize: '14px', cursor: 'pointer', padding: '5px' }}>+</span>
                                                        </td>
                                                        <td>{data.price}</td>
                                                        <td>{data.qnt * data.price}</td>
                                                        <td> <span className="text-danger" style={{ cursor: 'pointer' }} onClick={() => delet(index)}>Delete</span></td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    <br />
                                </tbody>
                            </Table>
                            : <div className='text-center text-danger py-3'>Not fount items </div>}


                        {/* <OutsideClickHandler onOutsideClick={() => setOrdershow(false)}>
                            <center>
                                {loca_adddata.length != 0 ?
                                    !login ?
                                        <Link to="/login"><button type="button" class="add-add-to-checkout">CheckOut</button></Link>
                                        :
                                        <button type="button" onClick={() => setOrdershow(true)} class="add-add-to-checkout">CheckOut</button>
                                    : ''}
                            </center>
                            {ordershow ?
                                <Order_now setOrdershow={setOrdershow} />
                                : ' '}
                        </OutsideClickHandler> */}



                    </div>
                </div>
            </div>
            <br />








            <Fooder />
        </>
    )
}




export default Addcard;