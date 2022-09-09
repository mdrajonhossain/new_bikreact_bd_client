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

            <br />

            <div className='col-12 col-md-5' style={{ margin:'0 auto', background: '#f1fdf1', padding: '30px' }}>

                
                    <div class="">
                        <label class="form-label" for="form3Example3cg">Phone Number</label>
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
                        <button disabled type="button" class="h3 btn btn-lg btn-success">Login</button> &nbsp;
                        <button disabled type="button" class="h3 btn btn-lg btn-danger">Reset</button>
                    </div>

                
            </div>




            <br />
            <Fooder />
        </>
    )
}




export default Login;