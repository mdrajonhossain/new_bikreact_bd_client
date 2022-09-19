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


  const Orderaction = () => {
    alert("Please Coming Soon Products Order")
  }

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
              <button type="button" onClick={() => Orderaction()} class="add-add-to-checkout">Order</button>
              <br />
              <br />
              <span>Delivery Information : </span>
              <br />
              <br />
              <label class="form-label" for="form3Example3cg">Delivery Address</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <label class="mt-2 form-label" for="form3Example3cg">Received Mobile Number</label>
              <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
              <button type="button" class="mt-2 h3 btn btn-lg"
                style={{ background: '#006a50', color: 'white' }}>Save</button>
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
