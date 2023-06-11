import React, { useEffect  } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layout";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";


function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  });

 

  return (
    <div className="dashboard">
      <div id="content">
        <DashboardStyled>
          <InnerLayout>
            <div className="top">
            <h1>All Transactions</h1>
            <div className="stats-con">
              <div className="chart-con">
                <Chart  />
                <div className="amount-con">
                  <div className="income">
                    <h2>Tot Income</h2>
                    <p>
                    ₹{totalIncome()}
                    </p>
                  </div>
                  <div className="expense">
                    <h2>Tot Expense</h2>
                    <p>
                    ₹{totalExpenses()}
                    </p>
                  </div>
                  <div className="balance">
                    <h2>Tot Balance</h2>
                    <p>
                    ₹{totalBalance()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="history-con">
                <h2 className="salary-title">
                  Min <span>Income</span>Max
                </h2>
                <div className="salary-item">
                  <p>
                    {dollar} {Math.min(...incomes.map((item) => item.amount))}
                  </p>
                  <p>
                    {dollar} {Math.max(...incomes.map((item) => item.amount))}
                  </p>
                </div>
                <h2 className="salary-title">
                  Min <span>Expense</span>Max
                </h2>
                <div className="salary-item">
                  <p>
                    {dollar} {Math.min(...expenses.map((item) => item.amount))}
                  </p>
                  <p>
                    {dollar} {Math.max(...expenses.map((item) => item.amount))}
                  </p>
                </div>
              </div>
            </div>
            </div>
          </InnerLayout>
        </DashboardStyled>
      </div>
    </div>
    
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 18rem;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        gap: 2rem;
        margin-top: 1rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 0.3rem solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 1.2rem;
          padding: .3rem;
          p {
            font-size: 2rem;
            font-weight: 400;
          }
        }
        .balance {
          grid-column: 2 / 4;
           position:absolute ; 
          right: 5rem;

          
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 2rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
  @media (max-width:1521) {
    .stats-con{
    .chart-con{
      .amount-con{
        .balance{
          position: static;
        }
      }
      
      }
    }
  }
  @media (max-width: 1010px) {
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        padding-bottom: 1rem;
        padding-left: 0rem;
      }
      .stats-con {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        gap: 14rem;
        width: 100%;
      }
      .chart-con{
        width: 100%;
      }
      .balance{
        position: absolute;
        left: 10rem;
        top:30rem;
        width: 50%;
      }
      .income,
      .expense{
        text-align: center;
      }
    }
  }
  @media (max-width: 920px) {
    &::-webkit-scrollbar {
      width: 0rem;
    }
    width: 100%;
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        background-color: #DDCCCC;
        padding: 0.5rem;
        width: 100vw;
        text-align: center;
        position: fixed;
        z-index: 1000;
        border: 0.1rem solid rgb(69, 69, 69);
        margin-top: -1rem;
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
      }
      .stats-con {
        width: 100%;
      }
      .chart-con{
        width: 100%;
        padding-left: 10rem;
        padding-right: 10rem;
       margin-top: 4rem;
      }
    }
     .amount-con{
      display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        margin: 1rem;
       .balance{
         width: 25%;
         position: absolute;
         left: 18rem;
      }
     } 
     
  }
 @media (max-width: 806px){
      .stats-con{
        .amount-con{
          .income,
          .expense,
          .balance{
            h2{
              font-size: 1.2rem;
              font-weight: 400;
            }
            p{
              font-size: 0.8rem;
              font-weight: 200;
            }
          }
        }
      }
 }

  @media (max-width: 780px) {
    .amount-con{
      .balance{
        position: absolute;
        left:16.5rem;
      }
    }
  }
`;

export default Dashboard;
