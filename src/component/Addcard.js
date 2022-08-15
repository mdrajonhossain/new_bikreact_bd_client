import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import { additems_data } from '../api/api';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { add_card_items_local_data } from '../api/api';


const Addcard = () => {
    const [loca_adddata, setLoca_adddata] = useState([]);






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



    return (
        <>
            <Header_navber />
            <br />
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-12">
                        asdf
                    </div>

                    <div className="col-md-8 col-12">
                        {loca_adddata.length != 0 &&
                            <Table striped bordered hover>
                                <thead>
                                    <tr className='bg-warning text-light'>
                                        <th>image</th>
                                        <th>Item Name</th>
                                        <th>Quntity</th>
                                        <th>Price(tk)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        loca_adddata.map((data) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <img width="80" height="70" src={"http://screete.bikretabd.com/items_image_file/" + data.img} />
                                                        </td>
                                                        <td>{data.item_name}</td>
                                                        <td>{data.price}</td>
                                                        <td>{2 * data.price}</td>
                                                        <td>Edit || Delete</td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    <tr>
                                        <td colspan="3" align="right">Total = </td>
                                        <td>1200 Tk</td>
                                    </tr>


                                </tbody>
                            </Table>
                        }
                    </div>
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Addcard;