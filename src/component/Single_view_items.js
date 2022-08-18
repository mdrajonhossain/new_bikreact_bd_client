import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { single_items } from '../api/api';
import { GoLocation } from "react-icons/go";
import { GrDeliver } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { RiMapPinTimeLine } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";





const Single_view_items = () => {
    const srcRef = useRef(null);
    const [single_items_data, setSingle_items_data] = useState([]);
    const { id } = useParams();



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


    return (
        <>
            <Header_navber />
            <br />


            <div className="container py-4" style={{ background: '#f3eaeab8' }}>
                <div className="row">
                    <div className="col-md-4">
                        {
                            single_items_data.map((data) => {
                                return (
                                    <>
                                        <img ref={srcRef} src={"http://screete.bikretabd.com/items_image_file/" + data.fontimg} />
                                    </>
                                )
                            })
                        }
                        <br />

                        {
                            single_items_data.map((data) => {
                                return (
                                    <div style={{ border: '1px solid lightgray', width: '84%' }}>
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
                                        <div className="h4 text-dark">{data.item_name}</div>
                                        <div className="h5 text-dark">Product Code : 5464</div>
                                        <div className="h6 text-dark">৳ {data.discount_price}</div>
                                        <br />
                                        <div className="h6 text-dark">Quntity :</div>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-primary">-</button>
                                            <button type="button" class="btn btn-light">1</button>
                                            <button type="button" class="btn btn-primary">+</button>
                                        </div>

                                    </>
                                )
                            })
                        }

                        <button type="button" class="add-add-to-cart-button">ADD TO CART</button>
                    </div>

                    <div className="col-md-4">
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