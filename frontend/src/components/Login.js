import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import bg from '../img/bg.png'

const Login = () =>{
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState("");

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const {data: res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
			localStorage.setItem("email",data.email);
            window.location = "/"
         
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
			console.log(error);
        }
    }
	

    return(
        <LoginStyled>
         <div className="login_container">
            <div className="login_form_container">
                <div className="left">
                <form className="form_container" onSubmit={handleSubmit}>
                  <h1>Login to Your Account</h1>
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
                  <button type="submit" className="green_btn">Sign in</button>
                  </form>
                </div>
                <div className="right">
                <h1>New Here?</h1>
                    <button type='button' className="white_btn" ><a className="wb" href="/signup">Sign up</a></button>
                </div>
            </div>
         </div>
        </LoginStyled>

    )
};

const LoginStyled = styled.div`

.login_container {
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
    background-image: url(${bg});
}

.login_form_container {
	width: 900px;
	height: 500px;
	display: flex;
	border-radius: 10px;
	box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
}

.left {
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
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

.right {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: pink;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}

.right h1 {
	margin-top: 0;
	color: white;
	font-size: 40px;
	align-self: center;
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
}

.green_btn {
	background-color: pink;
	color: white;
	margin: 10px;
}
.wb{
    text-decoration: none;
	font-size: 1rem;
    color: #232260;
}
`;

export default Login;