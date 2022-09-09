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

    const [names, setNames] = useState();
    const [phone, setPhone] = useState();
    
    
    const [email, setEmail] = useState();






    const nameChange = (event) => {
        const { name, value } = event.target;

        if (value.trim().length > 26) {
            event.target.classList.add('error')
            setNames('');
        } else {
            event.target.classList.remove('error');
            setNames(value);
        }
    }


    const validatePhoneNumber = (input_str) => {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(input_str);
    }

    const phoneChange = (event) => {
        const { name, value } = event.target;
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        const testvalied = validatePhoneNumber(value);
        setPhone(value);
        if (value.trim().length != 11) {
            if (testvalied) {
                event.target.classList.remove('error');
            } else {
                event.target.classList.add('error');
                setPhone('')
            }
        }
    }


    const emailChange = (event) => {
        const { name, value } = event.target;

        const match = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        
        if (match) {
            event.target.classList.remove('error');
            setEmail(match[0])
        } else {
            event.target.classList.add('error');
            setEmail('');
        }

    }




    const onsubmit = () => {
        console.log("asdfasdf");
    }

    return (
        <>
            <Header_navber />
            <br />
            <div className='col-12 col-md-5' style={{ margin: '0 auto', background: '#f1fdf1', padding: '30px' }}>
                <div style={{ width: '100%' }}>
                    <h4 class="text-center mb-5" style={{color:'#006a50'}}>Create your Bikreta Account</h4>
                    <div class="py-2">
                        <label class="form-label" for="form3Example1cg">Name</label>
                        <input type="text" onChange={nameChange} id="form3Example1cg" class="form-control form-control-lg" />
                        <span className="nameerror" style={{ position: 'relative' }}>Invalid Name</span>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Phone Number</label>
                        <input type="text" onChange={phoneChange} id="form3Example3cg" class="form-control form-control-lg" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        <span className="phoneerror" style={{ position: 'relative' }}>Invalid phone number</span>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Email</label>
                        <input type="email" onChange={emailChange} id="form3Example3cg" class="form-control form-control-lg" />
                        <span className="emailerror" style={{ position: 'relative' }}>Invalid email number</span>
                    </div>


                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Password</label>
                        <input type={showpassone ? 'text' : 'password'} class="form-control form-control-lg" />
                        <div className="eye" onClick={() => setShowpassone(!showpassone)}>
                            {showpassone ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Confirm password</label>
                        <input type={showpasstwo ? 'text' : 'password'} class="form-control form-control-lg" />
                        <div className="eye" onClick={() => setShowpasstwo(!showpasstwo)}>
                            {showpasstwo ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br />

                    <div class="d-flex">
                        <button type="button" onClick={() => onsubmit()} disabled class="h3 btn btn-lg btn-success">Register</button>
                    </div>
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}



export default Registration;