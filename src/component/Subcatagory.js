import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import { sub_cat_data } from '../api/api';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiFillHeart, AiFillCaretRight } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import { FcEmptyTrash } from "react-icons/fc";





const Subcatagory = () => {
    const [sub_data, setSub_data] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    useEffect(() => {
        try {
            var baseUrl = window.location.href;
            var dd = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
            sub_cat_data(dd)
                .then((res) => {
                    setSub_data(res.sub_id)
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
                {sub_data.length != 0 ? <div className="catagory_header">Sub Catagory List <AiFillCaretRight fontSize={23} /></div> : ""}
                <div className="row">                    {
                    sub_data.length != 0 ?
                        sub_data.map((dx) => {
                            return (
                                <div className="col-md-3">
                                    <Card style={{ marginTop: '15px' }}>
                                        <Link to={`/getitems/${dx.slug}/${dx.id}`}>
                                            <Card.Img variant="top" src={"http://screete.bikretabd.com/subcatagory/" + dx.sub_catagory_img} />                                            
                                            <Card.Body style={{ color: '#006a50' }}>
                                                <center><Card.Title>{dx.name}</Card.Title></center>
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </div>
                            )
                        })
                        : <div className='empty_sub_catagory'> <FcEmptyTrash fontSize={40} /> <br />No find sub catagory</div>
                }
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Subcatagory;