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



    const validatePhoneNumber = (input_str) => {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(input_str);
    }

    const phoneChange = (event) => {
        const { name, value } = event.target;
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        const testvalied = validatePhoneNumber(value);        
        if (value.trim().length != 11) {
            if (testvalied) {
                event.target.classList.remove('error');
            } else {
                event.target.classList.add('error');                
            }
        }
    }



    const passChange = (event) => {
        const { name, value } = event.target;


        if (value.trim().length > 7 && value.trim().length < 11) {
            event.target.classList.remove('error');            
        } else {
            event.target.classList.add('error');
        }
    }


    return (
        <>
            <Header_navber />

            <br />

            <div className='col-12 col-md-5' style={{ margin:'0 auto', background: '#f1fdf1', padding: '30px' }}>

            <h4 class="text-center mb-5" style={{color:'#006a50'}}>Welcome to Bikreta account login.</h4>
                    <div class="">
                        <label class="form-label" for="form3Example3cg">Phone Number</label>
                        <input onChange={phoneChange} type="email" id="form3Example3cg" class="form-control form-control-lg" />
                        <span className="phoneerror" style={{ position: 'relative' }}>Invalid... Minimum length 11 letter</span>
                    </div>

                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cg">Password</label>
                        <input onChange={passChange} type={showpass ? 'text' : 'password'} id="form3Example4cg" class="form-control form-control-lg" />
                        <span className="passlerror" style={{ position: 'relative' }}>Invalid password (Charecture length 8 - 10 letter)</span>
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