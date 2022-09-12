import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { client_regi } from '../api/api';
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
    let navigate = useNavigate();
    const [showpassone, setShowpassone] = useState(false);
    const [showpasstwo, setShowpasstwo] = useState(false);

    const [names, setNames] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [address, setAddress] = useState("");

    const [valida, setValida] = useState(false);

    const name = useRef();
    const phone_number = useRef();
    const email_address = useRef();
    const pass = useRef();
    const conpass = useRef();
    const fulladdress = useRef();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const login = localStorage.getItem('token');
        if (login) {
            navigate('/');
        } else {
            
        }
    }, [100])





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

    const passChange = (event) => {
        const { name, value } = event.target;


        if (value.trim().length > 7 && value.trim().length < 11) {
            event.target.classList.remove('error');
            setPassword(value)
        } else {
            event.target.classList.add('error')
            setPassword('')
        }
    }

    const confpassChange = (event) => {
        const { name, value } = event.target;

        const match = password.toLowerCase().match(value.trim());
        if (match) {
            event.target.classList.remove('error');
            setConpassword(value);
        } else {
            event.target.classList.add('error')
            setConpassword('')
        }
    }

    const addressChange = (event) => {
        const { name, value } = event.target;

        setAddress('')

        if (value.trim().length > 55) {
            event.target.classList.add('error')
        } else {
            event.target.classList.remove('error');
            setAddress(value)
        }
    }

    const onsubmit = () => {
        if (names.trim().length !== 0 && phone.trim().length !== 0 && email.trim().length !== 0 && password.trim().length !== 0 && conpassword.trim().length !== 0 && address.trim().length !== 0) {
            const data = {
                'name': names,
                'phone': phone,
                'email': email,
                'password': password,
                'address': address
            };

            try {
                client_regi(data)
                    .then((res) => {
                        if (res.status) {
                            // navigate("/login", { state: { message: "successfully" }});
                            name.current.value = '';
                            phone_number.current.value = '';
                            email_address.current.value = '';
                            pass.current.value = '';
                            conpass.current.value = '';
                            fulladdress.current.value = '';
                            toast("Registration successfully");
                        }
                    })
            } catch (error) {
                console.error(error);
            }

        } else {
            alert("please form filup");
        }
    }




    return (
        <>
            <Header_navber />
            <ToastContainer />
            <br />
            <div className='col-12 col-md-5' style={{ margin: '0 auto', background: '#f1fdf1', padding: '30px' }}>
                <div style={{ width: '100%' }}>
                    <h4 class="text-center mb-5" style={{ color: '#006a50' }}>Create your Bikreta Account</h4>
                    <div class="py-2">
                        <label class="form-label" for="form3Example1cg">Name</label>
                        <input type="text" ref={name} onChange={nameChange} id="form3Example1cg" class="form-control form-control-lg" />
                        <span className="nameerror" style={{ position: 'relative' }}>Invalid... Minimum length 25 letter</span>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Phone Number</label>
                        <input type="text" ref={phone_number} onChange={phoneChange} id="form3Example3cg" class="form-control form-control-lg" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        <span className="phoneerror" style={{ position: 'relative' }}>Invalid... Minimum length 11 letter</span>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Email</label>
                        <input type="email" ref={email_address} onChange={emailChange} id="form3Example3cg" class="form-control form-control-lg" />
                        <span className="emailerror" style={{ position: 'relative' }}>Invalid email address</span>
                    </div>


                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Password</label>
                        <input ref={pass} onChange={passChange} type={showpassone ? 'text' : 'password'} class="form-control form-control-lg" />
                        <span className="passlerror" style={{ position: 'relative' }}>Invalid password (Charecture length 8 - 10 letter)</span>
                        <div className="eye" onClick={() => setShowpassone(!showpassone)}>
                            {showpassone ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <div class="py-2" style={{ position: 'relative' }}>
                        <label class="form-label" for="form3Example4cdg">Confirm password</label>
                        <input ref={conpass} onChange={confpassChange} type={showpasstwo ? 'text' : 'password'} class="form-control form-control-lg" />
                        <span className="conpasslerror" style={{ position: 'relative' }}>Invalid password (Charecture length 8 - 10 letter)</span>
                        <div className="eye" onClick={() => setShowpasstwo(!showpasstwo)}>
                            {showpasstwo ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                        </div>
                    </div>

                    <div class="py-2">
                        <label class="form-label" for="form3Example3cg">Address</label>
                        <textarea ref={fulladdress} onChange={addressChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <span className="addresslerror" style={{ position: 'relative' }}>Invalid.. minimum 42 letter address</span>
                    </div>
                    <br />

                    <div class="d-flex">
                        <button type="button" onClick={() => onsubmit()} class="h3 btn btn-lg" style={{background:'#006a50', color:'white'}}>Register</button>
                    </div>
                    <span style={{ color: 'red', fontSize: '14px' }}>Already have login and password ?</span>
                    <Link to="/login"><span style={{ color: '#006a50', fontSize: '16px', cursor: 'pointer' }}> Login </span></Link>
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}



export default Registration;