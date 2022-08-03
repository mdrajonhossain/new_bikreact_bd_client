import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { cat_getdata } from '../api/api';



const data = [
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "1" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "2" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "3" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "4" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "1" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "2" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "4" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "1" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "6" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "1" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "4" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "1" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "1" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "9" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "8" },
    { product_name: "asdfasdfasdf", price: "sdfasdfasdf", qnt: "1" }
]


const Catagory_list = () => {
    const [cata, setCata] = useState([]);



    useEffect(() => {

        cat_getdata()
            .then((res) => {
                setCata(res.cat_data);
            })
    }, [])


    return (
        <>
            <div className="container">
                <div className="catagory_header">Catagory List</div>
                <div className="row">
                    {cata.map((dx) => {
                        return (
                            <div className="col-md-3">
                                <Card style={{ marginTop: '15px' }}>
                                    <Card.Img variant="top" src={"http://screete.bikretabd.com/catagory/" + dx.catagory_img} />
                                    <Card.Body>
                                        <center><Card.Title>{dx.name}</Card.Title></center>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}




export default Catagory_list;