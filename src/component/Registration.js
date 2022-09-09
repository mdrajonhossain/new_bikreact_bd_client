import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { single_items } from '../api/api';
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";






const Registration = () => {
    const [showpassone, setShowpassone] = useState(false);
    const [showpasstwo, setShowpasstwo] = useState(false);
        
    const [name, setName ] = useState();
    const [nameerror, setNameerror ] = useState();

    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();
    const [repeat_password, setRepeat_password] = useState();
    const [phone, setPhone ] = useState();
    const [adddress, setAddress ] = useState();


    const nameChange = (event)=> {
        console.log(event.target.value);
        if(event.target.value.length < 10 ){
            setName(event.target.value);       
        }else{
            setNameerror("erorr");       
        }

      }
    const emailChange = (event)=> {
        console.log(event.target.value);
        setEmail(event.target.value);
      }

      const passwordChange = (event)=> {
        console.log(event.target.value);
        setPassword(event.target.value);
      }
      const repasswordChange = (event)=> {
        console.log(event.target.value);
        setRepeat_password(event.target.value);
      }

      const phoneChange = (event)=> {
        console.log(event.target.value);
        setPhone(event.target.value);
      }

      const addressChange = (event)=> {
        console.log(event.target.value);
        setAddress(event.target.value);
      }

      const onsubmit = ()=>{
        console.log("asdfasdf");
      }

    return (
        <>
            <Header_navber />

            <div class="container py-3" style={{ background: '#f1fdf1', padding: '80px' }}>
                <div style={{ width: '100%' }}>
                    <h2 class="text-center mb-5">Registration</h2>
                    <div class="py-2">
                        <label class="form-label" for="form3Example1cg">Name</label>
                        <input type="text" onChange={nameChange} id="form3Example1cg" class="form-control form-control-lg" />
                        <span style={{color:'red'}}>{nameerror}</span>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Phone Number</label>
                        <input type="phone"onChange={phoneChange}  id="form3Example3cg" class="form-control form-control-lg" />
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Email</label>
                        <input type="email" onChange={emailChange} id="form3Example3cg" class="form-control form-control-lg" />
                    </div>


                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Password</label>
                        <input onChange={passwordChange} type={showpassone ? 'text' : 'password'} id="form3Example4cdg" class="form-control form-control-lg" />                        
                        <div className="eye" onClick={() => setShowpassone(!showpassone)}>
                            {showpassone ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Confirm password</label>
                        <input onChange={repasswordChange} type={showpasstwo ? 'text' : 'password'} id="form3Example4cdg" class="form-control form-control-lg" />                        
                        <div className="eye" onClick={() => setShowpasstwo(!showpasstwo)}>
                            {showpasstwo ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Address</label>
                        <textarea class="form-control" onChange={addressChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br />

                    <div class="d-flex">
                        <button type="button" onClick={()=>onsubmit()}disabled class="h3 btn btn-lg btn-success">Register</button>                        
                    </div>
                </div>
            </div>

            <Fooder />
        </>
    )
}



export default Registration;