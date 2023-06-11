import React from 'react'
import styled from 'styled-components'
import ava from '../../img/ava.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/MenuItems';
import { useGlobalContext } from "../../context/globalContext";

function Navigation({active, setActive}) {
    const myData = localStorage.getItem('name');
    const handleLogout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        window.location.reload();
    }
    const {totalBalance} = useGlobalContext();
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={ava} alt="" />
                <div className="text">
                    <h2>Hello&nbsp;{myData}</h2>
                    <p>Total Balance - {totalBalance()}</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} <button className='but' onClick={handleLogout}>Sign Out</button>
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    /* width: 374px; */
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 0.23rem solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 0;
    }
    scroll-behavior: smooth;
    gap: 1rem;
    .user-con{
        height: 5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 3rem;
            height: 3rem;
            border-radius: 0.8rem;
            object-fit: cover;
            background: #fcf6f9;
            border: 0.1rem solid #FFFFFF;
            padding: .2rem;
            /* box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06); */
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        li{
            display: grid;
            grid-template-columns: 2rem auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                
            }
        }
    }
    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 0.3rem;
            height: 100%;
            background: #222260;
            border-radius: 0rem  0.2rem 0.2rem 0rem;
            transition: all 0.4s ease-in-out;
        }
    }

    .but{
        cursor:pointer;
        border-style: none;
        color: rgba(34, 34, 96, .6);
        font-weight: 500;
        font-size: 1.2rem;
        transition: all .4s ease-in-out;
        padding: 0.1rem;
        background:none;
        margin-left: 1rem;
    }
    @media (max-width: 1020px) {
    .user-con {
      h2 {
        font-size: 1.1rem;
      }
    }
    .menu-items {
      li {
        font-size: 0.8rem;
      }
    }
}
@media (max-width: 920px) {
    position: absolute;
    top: 3.5rem;
    left: -20.1rem;
    border-top-left-radius: 0rem;
    height: 100%;
    z-index: 1;
    transform: ${({ openn }) => (openn ? "translateX(100%)" : "translateX(0)")};
    transition: transform 0.3s ease-in-out;
}
   
    
`;

export default Navigation