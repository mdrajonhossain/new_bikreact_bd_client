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

    const delet = (e) => {
        const add_items = JSON.parse(localStorage.getItem("add_items"));
        add_items.splice(e, 1);
        localStorage.setItem('add_items', JSON.stringify(add_items));

    }



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
                        {loca_adddata.length != 0 ?
                            <Table striped bordered hover>
                                <thead>
                                    <tr className='text-light' style={{ background: '#006a50' }}>
                                        <th>image</th>
                                        <th>Item Name</th>
                                        <th>Quntity</th>
                                        <th>Price(tk)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        loca_adddata.map((data, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <img width="80" height="70" src={"http://screete.bikretabd.com/items_image_file/" + data.img} />
                                                        </td>
                                                        <td>{data.item_name}</td>
                                                        <td>
                                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                                <button type="button" class="btn btn-primary">-</button>
                                                                <button type="button" class="btn btn-light">{data.qnt}</button>
                                                                <button type="button" class="btn btn-primary">+</button>
                                                            </div>
                                                        </td>
                                                        <td>{data.price}</td>
                                                        <td> <span className='text-success' style={{ cursor: 'pointer' }}>Edit</span> || <span className="text-danger" style={{ cursor: 'pointer' }} onClick={() => delet(index)}>Delete</span></td>
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
                            : <div className='text-center text-danger py-3'>No addcard data </div>}
                    </div>
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Addcard;