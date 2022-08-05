import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import { additems_data } from '../api/api';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiFillHeart, AiFillCaretRight } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import { FcEmptyTrash } from "react-icons/fc";





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


    return (
        <>
            <Header_navber />
            <br />

            <div className="container">
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
                                            <Card.Body style={{ color: '#006a50' }}>
                                                <center><Card.Title>{dx.item_name}</Card.Title></center>
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