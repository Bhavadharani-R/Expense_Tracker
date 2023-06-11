import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import {Chart as ChartJs,Tooltip,Legend,ArcElement}  from "chart.js";
import {Pie} from "react-chartjs-2";


ChartJs.register(Tooltip,Legend,ArcElement)

function Chart2() {
const {expenses} = useGlobalContext()

const data = {
        labels: expenses.map((inc) =>{
            const {title} = inc
            return (title)
        }),
            
        
        datasets: [
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: ['#F8BBD0','#A7FFEB','#FFF9C4','#D7BDE2','#F5B7B1','#D6EAF8','#ABEBC6'],
                borderColor: 'grey'
            
                
            },
            
        ]

        
    }

  return (
    <Chart2Styled>
        <div className="tot">
        <div className="f">
        <div className="chart3">
            <h1 style={{ fontSize:'1.5rem',  marginLeft:'3.5rem'}}>Expense Chart</h1>
         <Pie data={data}  />
         </div>
         </div>
         </div>

    </Chart2Styled>
  )
}

const Chart2Styled = styled.div`
.tot{
    background: #FCF6F9;
    border: 10px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 22rem;
    margin-right:2.3rem;
    margin-top:2rem;

}

.chart3{
    width:17rem;
    height:17rem;
}

`;


export default Chart2;