import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { client_login } from '../api/api';
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';




const Login = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const [showpass, setShowpass] = useState(false);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [login_sucess, setLogin_sucess] = useState(false);


    const phone_number = useRef();
    const pass = useRef();

    const validatePhoneNumber = (input_str) => {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(input_str);
    }

    const phoneChange = (event) => {
        const { name, value } = event.target;
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        const testvalied = validatePhoneNumber(value);
        if (value.trim().length != 12) {
            if (testvalied) {
                event.target.classList.remove('error');
                setPhone(value.trim());
            } else {
                event.target.classList.add('error');
                setPhone('');
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const passChange = (event) => {
        const { name, value } = event.target;


        if (value.trim().length > 7 && value.trim().length < 11) {
            event.target.classList.remove('error');
            setPassword(value);
        } else {
            event.target.classList.add('error');
            setPassword('');
        }
    }


    const onesumbit = () => {
        const datafile = {
            'phone': phone,
            'password': password
        };
        console.log(datafile);
        if (phone.trim().length !== 0 && password.trim().length !== 0) {
            const datafile = {
                'phone': phone,
                'password': password
            };
            try {
                client_login(datafile)
                    .then((res) => {
                        if (res.status) {
                            phone_number.current.value = '';
                            pass.current.value = '';
                            toast("Client User Login successfully");
                            localStorage.setItem('token', res.totke);
                            localStorage.setItem("client_user", JSON.stringify(res.data));
                            setLogin_sucess(true);
                        } else {
                            localStorage.setItem('token', res.totke);
                            phone_number.current.value = '';
                            pass.current.value = '';
                            toast("Not login successfully");
                            setLogin_sucess(false);
                        }
                    })
            } catch (error) {
                console.error(55, error);
            }

        } else {
            alert("please form filup");
        }
    }






    useEffect(() => {

        const login = localStorage.getItem('token');
        if (login) {
            navigate('/');
        }
    }, [login_sucess])






    return (
        <>
            <Header_navber />
            <ToastContainer />
            <br />

            <div className='col-12 col-md-5' style={{ margin: '0 auto', background: '#f1fdf1', padding: '30px' }}>

                <h4 class="text-center mb-5" style={{ color: '#006a50' }}>Welcome to Bikreta account login.</h4>
                <div class="">
                    <label class="form-label" for="form3Example3cg">Phone Number</label>
                    <input ref={phone_number} onChange={phoneChange} type="text" id="form3Example3cg" class="form-control form-control-lg" />
                    <span className="phoneerror" style={{ position: 'relative' }}>Invalid... Minimum length 11 letter</span>
                </div>

                <div class="py-2" style={{ position: 'relative' }}>
                    <label class="form-label" for="form3Example4cg">Password</label>
                    <input ref={pass} onChange={passChange} type={showpass ? 'text' : 'password'} id="form3Example4cg" class="form-control form-control-lg" />
                    <span className="passlerror" style={{ position: 'relative' }}>Invalid password (Charecture length 8 - 10 letter)</span>
                    <div className="eye" onClick={() => setShowpass(!showpass)}>
                        {showpass ? <BsFillEyeSlashFill size={20} /> : <AiFillEye size={20} />}
                    </div>
                </div>

                <br />

                <div class="d-flex">
                    <button type="button" onClick={() => onesumbit()} class="h3 btn btn-lg" style={{ background: '#006a50', color: 'white' }}>Login</button>&nbsp;
                    <button type="button" class="h3 btn btn-lg btn-danger">Reset</button>
                </div>


            </div>




            <br />
            <Fooder />
        </>
    )
}




export default Login;