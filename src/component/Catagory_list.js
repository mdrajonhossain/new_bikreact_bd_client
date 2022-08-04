import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { cat_getdata } from '../api/api';
import { AiOutlineEye, AiFillHeart , AiFillCaretRight } from "react-icons/ai";



 


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
                <div className="catagory_header">Catagory List <AiFillCaretRight fontSize={23}/></div>
                <div className="row">
                    {cata.map((dx) => {
                        return (
                            <div className="col-md-3">
                                <Card style={{ marginTop: '15px' }}>
                                    <Card.Img variant="top" src={"http://screete.bikretabd.com/catagory/" + dx.catagory_img} />
                                    <div className="view_count"><AiOutlineEye fontSize={18}/> 25 <AiFillHeart fontSize={16}/> 25 </div>
                                    <Card.Body style={{color: '#006a50'}}>
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