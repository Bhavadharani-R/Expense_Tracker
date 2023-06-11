import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import React, { useState } from "react";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layout";
// import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expenses from "./components/Expenses/Expenses";
import Transaction from "./components/Dashboard/Transaction";
import Chart1 from "./components/Chart/Chart1";


const AppStyled = styled.div`
  height: 100vh;
  // background-image: url(${bg});
   background-color:#ddcccc;
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 0.23rem solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  @media (max-width: 920px) {
    overflow-x:hidden ;
    main{
      border: none;
      width: 100vw;
      gap:0rem;
      margin: 0%;
      border-radius: 0rem;
    }
  }
`;

function App() {
  const [active, setActive] = useState(1);
  const user = localStorage.getItem("token");

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transaction />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <Chart1 />;
      default:
        return <Signup />;
    }
  };

  // const orbMemo = useMemo(() => {
  //   return <Orb />;
  // }, []);

  return (
    <>
    
      <Routes>
        {user && <Route path="/" />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/signup" />} />
      </Routes>

      <AppStyled className="App">
        {/* {orbMemo} */}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>{displayData()}</main>
        </MainLayout>
      </AppStyled>
    </>
  );
}
export default App;
