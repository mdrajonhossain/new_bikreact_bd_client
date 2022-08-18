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




const Login = () => {
    const [showpass, setShowpass] = useState(false);





    return (
        <>
            <Header_navber />

            <div class="container" style={{ background: '#f1fdf1', padding: '80px' }}>
                <div style={{ width: '100%' }}>
                    <h2 class="text-center mb-5">Login</h2>

                    <div class="">
                        <label class="form-label" for="form3Example3cg">Your Email</label>
                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                    </div>

                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cg">Password</label>
                        <input type={showpass ? 'text' : 'password'} id="form3Example4cg" class="form-control form-control-lg" />
                        <div className="eye" onClick={() => setShowpass(!showpass)}>
                            {showpass ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <br />

                    <div class="d-flex">
                        <button type="button" class="h3 btn btn-lg btn-success">Register</button>
                    </div>
                </div>
            </div>




            <br />
            <Fooder />
        </>
    )
}




export default Login;