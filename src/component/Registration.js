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


    return (
        <>
            <Header_navber />

            <div class="container py-3" style={{ background: '#f1fdf1', padding: '80px' }}>
                <div style={{ width: '100%' }}>
                    <h2 class="text-center mb-5">Registration</h2>
                    <div class="py-2">
                        <label class="form-label" for="form3Example1cg">Your Name</label>
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Your Email</label>
                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example4cg">Password</label>
                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                    </div>

                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                        <input type={showpassone ? 'text' : 'password'} id="form3Example4cdg" class="form-control form-control-lg" />                        
                        <div className="eye" onClick={() => setShowpassone(!showpassone)}>
                            {showpassone ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                        <input type={showpasstwo ? 'text' : 'password'} id="form3Example4cdg" class="form-control form-control-lg" />                        
                        <div className="eye" onClick={() => setShowpasstwo(!showpasstwo)}>
                            {showpasstwo ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>


                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Your Phone Number</label>
                        <input type="phone" id="form3Example3cg" class="form-control form-control-lg" />
                    </div>


                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Your Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br />

                    <div class="d-flex">
                        <button type="button" class="h3 btn btn-lg btn-success">Register</button>                        
                    </div>
                </div>
            </div>

            <Fooder />
        </>
    )
}



export default Registration;