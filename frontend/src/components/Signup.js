import styled from "styled-components";
import { useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import bg from '../img/bg.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Signup = () =>{
   
    const [data, setData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:""
    })
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(data);

            const url = "http://localhost:8080/api/users";
            const {data: res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
			localStorage.setItem("email",data.email);
            localStorage.setItem("name", data.firstName);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8oy58wg', 'template_6kzij19', form.current, '-XGfXJhiUtD0XgwV9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <SignupStyled>
         <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                <h1>Welcome Back</h1>
                <button type='button' className="white_btn"><a className="wb" href="/login" >Sign In</a></button>
                </div>
                <div className="right">
                  <form className="form_container" onSubmit={handleSubmit} ref={form} onSubmitCapture={sendEmail}>
                  <h1>Create Account</h1>
                  <input
                  type="text"
                  placeholder="First Name"
                  name='firstName'
                  onChange={handleChange}
                  value={data.firstName}
                  required
                  className="input"
                  />
                  <input
                  type="text"
                  placeholder="Last Name"
                  name='lastName'
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className="input"
                  />
                    <input
                  type="email"
                  placeholder="Email"
                  name='email'
                  onChange={handleChange}
                  value={data.email}
                  required
                  className="input"
                  />
                  <input
                  type="password"
                  placeholder="Password"
                  name='password'
                  onChange={handleChange}
                  value={data.password}
                  required
                  className="input"
                  />
                  {error && <div className="error_msg">{error}</div>}
                  <button type="submit" className="green_btn">Sign Up</button>
                  </form>
                </div>
            </div>
         </div>
        </SignupStyled>

    )
};

const SignupStyled = styled.div`

.signup_container {
	width: 100%;
	min-height: 100vh;
    background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
    background-image: url(${bg});
}

.signup_form_container {
	width: 900px;
	height: 500px;
	display: flex;
	border-radius: 10px;
	box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
}

.left {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: pink;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}

.left h1 {
	margin-top: 0;
	color: white;
	font-size: 35px;
	align-self: center;
}

.right {
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}

.form_container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form_container h1 {
	font-size: 40px;
	margin-top: 0;
}

.input {
	outline: none;
	border: none;
	width: 370px;
	padding: 15px;
	border-radius: 10px;
	background-color: #edf5f3;
	margin: 5px 0;
	font-size: 14px;
}

.error_msg {
	width: 370px;
	padding: 15px;
	margin: 5px 0;
	font-size: 14px;
	background-color: #f34646;
	color: white;
	border-radius: 5px;
	text-align: center;
}

.white_btn,
.green_btn {
	border: none;
	outline: none;
	padding: 12px 0;
	background-color: white;
	border-radius: 20px;
	width: 180px;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
    text-decoration: none;
    
    
}

.green_btn {
	background-color: pink;
	color: white;
	margin: 10px;
    text-decoration: none;
}
.wb{
    text-decoration:none;
    font-size: 1rem;
    color: #232260;
    
}

`;

export default Signup;