import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { single_items } from '../api/api';






const Single_view_items = () => {
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




    return (
        <>
            <Header_navber />
            <br />


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    {
                            single_items_data.map((data) => {
                                return (
                                    <>                                        
                                      <img variant="top" src={"http://screete.bikretabd.com/items_image_file/" + data.fontimg} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-8">
                        {
                            single_items_data.map((data) => {
                                return (
                                    <>
                                        <div className="h4 text-dark">{data.item_name}</div>
                                        <div className="h5 text-dark">Product Code : 5464</div>
                                        <div className="h6 text-dark">Price: {data.discount_price}(Tk)</div>

                                    </>
                                )
                            })
                        }


                        <button type="button" class="add-add-to-cart-button">ADD TO CART</button> &nbsp;
                        <button type="button" class="add-add-to-cart-button">BY NOW</button> &nbsp;
                        <button type="button" class="add-add-to-cart-button">ADD TO WISHLIST</button>

                    </div>

                </div>

            </div>


            <br />
            <Fooder />
        </>
    )
}




export default Single_view_items;