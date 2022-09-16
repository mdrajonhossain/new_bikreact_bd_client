import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Table from 'react-bootstrap/Table';
import { add_card_items_local_data } from '../api/api';
import React, { useState, useEffect } from 'react';



const Order_now = (props) => {
  const [loca_adddata, setLoca_adddata] = useState([]);



  useEffect(() => {
    setInterval(function () {
      add_card_items_local_data()
        .then((res) => {
          setLoca_adddata(res);
        })
    }, 100);
  }, [])


  return (
    <div className="Order_now">
      <div className='header'>
        <div style={{ padding: '15px', color: 'white', fontSize: '18px' }}>Order Now</div>
        <div className='close' onClick={() => props.setOrdershow(false)}>&#10006;</div>
      </div>

      <div className='order_body'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-6'>
            <button type="button" class="add-add-to-checkout">Order</button>
            </div>

            <div className='col-md-6'>
              <Table striped>
                <tbody>
                  {

                    loca_adddata.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <img width="50" height="40" src={"http://screete.bikretabd.com/items_image_file/" + data.img} />
                            </td>
                            <td>{data.item_name}</td>
                            <td>{data.qnt}</td>
                            <td>{data.qnt * data.price}</td>
                          </tr>
                        </>
                      )
                    })}
                  <br />
                </tbody>
              </Table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Order_now;
