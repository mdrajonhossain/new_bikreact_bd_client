import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import Order_now from './Order_now';
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { single_items } from '../api/api';
import { GoLocation } from "react-icons/go";
import { GrDeliver } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { RiMapPinTimeLine } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import { add_card_items_local_data } from '../api/api';
import OutsideClickHandler from 'react-outside-click-handler';




const Single_view_items = () => {
    const [login, setLogin] = useState(false);
    const srcRef = useRef(null);
    const { id } = useParams();
    const [single_items_data, setSingle_items_data] = useState([]);
    const [getitemscounter, setGetitemscounter] = useState(0);
    const [ordershow, setOrdershow] = useState(false);



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        try {
            single_items(id)
                .then((res) => {
                    setSingle_items_data(res.items);
                })
        } catch (error) {
            console.error(error);
        }

    }, [id]);


    const showimg = (e) => {
        srcRef.current.src = "http://screete.bikretabd.com/items_image_file/" + e;
    }



    const itemsincrementcounter = (e) => {
        var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");

        if (add_items.length === 0) {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
            const items = [{ "item_name": e.item_name, "img": e.fontimg, "price": e.discount_price, "qnt": 1, items_id:e.id }];
            localStorage.setItem("add_items", JSON.stringify(items));
        } else {
            var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
            var mach = add_items.filter((dt) => {
                return dt.item_name.match(e.item_name)
            })
            if (mach.length === 0) {
                var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
                add_items.push({ "item_name": e.item_name, "img": e.fontimg, "price": e.discount_price, "qnt": 1, items_id:e.id });
                localStorage.setItem("add_items", JSON.stringify(add_items));
            } else {
                var add_items = JSON.parse(localStorage.getItem("add_items") || "[]");
                var index = add_items.findIndex(x => x.item_name === e.item_name);
                add_items[index].qnt = add_items[index].qnt + 1;
                localStorage.setItem("add_items", JSON.stringify(add_items));
            }
        }
    }

    const decrement = () => {
        var data = JSON.parse(localStorage.getItem("add_items") || "[]");
        var index = data.findIndex(x => x.item_name === single_items_data[0].item_name);
        if (data[index].qnt > 1) {
            data[index].qnt = data[index].qnt - 1;
        }
        localStorage.setItem("add_items", JSON.stringify(data));
    }



    useEffect(() => {
        setInterval(function () {
            add_card_items_local_data()
                .then((res) => {
                    const match = res.filter((data) => {
                        return data.item_name.match(single_items_data[0].item_name)
                    })
                    setGetitemscounter(match[0].qnt)
                })
        }, 10);
    })



    const logecheck = () => {
        alert("sadfasdf");
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

    return (
        <>
            <Header_navber />
            <br />


            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        {
                            single_items_data.map((data) => {
                                return (
                                    <>
                                        <img ref={srcRef} src={"http://screete.bikretabd.com/items_image_file/" + data.fontimg} />
                                        {/* <iframe src="https://www.youtube.com/embed/npnp--SSx_8" title="How To Embed YouTube Videos with iframe Tag in HTML - Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                    </>
                                )
                            })
                        }
                        <br />

                        {
                            single_items_data.map((data) => {
                                return (
                                    <div style={{ border: '1px solid lightgray', width: '84%' }}>
                                        {/* <iframe className="imageone" src="https://www.youtube.com/embed/npnp--SSx_8" title="How To Embed YouTube Videos with iframe Tag in HTML - Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                        <img className="imageone" onClick={() => showimg(data.fontimg)} src={"http://screete.bikretabd.com/items_image_file/" + data.fontimg} />
                                        <img className="imageone" onClick={() => showimg(data.backimg)} src={"http://screete.bikretabd.com/items_image_file/" + data.backimg} />
                                    </div>
                                )
                            })
                        }



                    </div>
                    <div className="col-md-4" style={{ position: 'relative' }}>
                        {
                            single_items_data.map((data) => {
                                return (
                                    <>
                                        <div className="h4 text-dark">{data.item_name} </div>
                                        <div className="h5 text-dark">Product Code : 5464</div>
                                        <div className="h6 text-dark">
                                            <span style={{ fontSize: '14px', textDecoration: 'line-through', textDecorationColor: 'red' }}> ৳ {data.regular_price}</span>
                                            <span style={{ color: '#006a50', fontSize: '20px' }}> ৳{data.discount_price}(Tk)</span><br />
                                        </div>
                                        <br />

                                        {getitemscounter ? <>
                                            <span className="h6 text-dark">Quntity : </span>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" onClick={() => decrement()} class="btn" style={{ background: '#006a50', color: 'white' }}>-</button>
                                                <button type="button" class="btn btn-light">{getitemscounter ? getitemscounter : 0}</button>
                                                <button type="button" onClick={() => itemsincrementcounter(data)} class="btn" style={{ background: '#006a50', color: 'white' }}>+</button>
                                            </div>
                                            <br />
                                            <br />
                                            {!login ?
                                                <Link to="/login"><button type="button" class="add-add-to-checkout">CheckOut</button></Link>
                                                :
                                                <OutsideClickHandler onOutsideClick={() => setOrdershow(false)}>
                                                    <button type="button" onClick={() => setOrdershow(!ordershow)} class="add-add-to-checkout">CheckOut</button>
                                                    {ordershow ? 
                                                    <Order_now setOrdershow={setOrdershow} />
                                                    : ""}
                                                </OutsideClickHandler>                                                
                                            }
                                        </>
                                            :
                                            <button onClick={() => itemsincrementcounter(data)} type="button" class="add-add-to-cart-button">ADD TO CART</button>
                                        }

                                    </>
                                )
                            })
                        }






                    </div>

                    <div className="col-md-4 py-2" style={{ background: '#f1ebeb7a' }}>
                        <div className='h6 text-lightgray'>Delivery</div>
                        <div className='text-lightgray py-2' style={{ position: 'reletive', }}><GoLocation /> 01, Banasree, Dhaka-1209, <br /> &nbsp; &nbsp; Bangladesh.
                            <span style={{ fontSize: '15px', position: 'absolute', right: '220px', fontWeight: 'bold', cursor: 'pointer' }}>Change</span>
                        </div>
                        <div className='text-lightgray py-2' style={{ position: 'reletive', }}><GrDeliver /> Standard Delivery
                            <span style={{ fontSize: '15px', position: 'absolute', right: '220px', fontWeight: 'bold' }}>৳ 62</span>
                            <br /> &nbsp; &nbsp; &nbsp;
                            <span style={{ fontSize: '12px' }}>3 - 5 day(s)</span>
                        </div>
                        <div className='text-lightgray py-3'><GiPayMoney /> Cash on Delivery Available</div>
                        <div className='h6 text-lightgray'>Service</div>
                        <div className='text-lightgray py-2'><RiMapPinTimeLine /> 7 Days Returns
                            <br /> &nbsp; &nbsp; &nbsp;
                            <span style={{ fontSize: '12px' }}>Change of mind is not applicable</span>
                        </div>
                        <div className='text-lightgray py-2'><AiOutlineFileProtect /> Warranty not available</div>
                    </div>

                </div>

            </div>


            <br />
            <Fooder />
        </>
    )
}




export default Single_view_items;