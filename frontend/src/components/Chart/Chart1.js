import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import {Chart as ChartJs,Tooltip,Legend,ArcElement}  from "chart.js";
import {Pie} from "react-chartjs-2";
import Chart2 from './Chart2';



ChartJs.register(Tooltip,Legend,ArcElement)

function Chart1() {
const {incomes} = useGlobalContext()


const data = {
        labels: incomes.map((inc) =>{
            const {title} = inc
            return (title)
        }),
            
        
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: ['#D7BDE2','#F5B7B1','#D6EAF8','#ABEBC6','#F06292','#A7FFEB','#FFF9C4'],
                borderColor: 'grey'
                
            },
            
        ]

        
    }

  return (
    <Chart1Styled>
    
        <div className="f">
        <div className="chart">
            <h1 style={{fontSize:'1.5rem', marginLeft:'3.5rem'}}>Income Chart</h1>
         <Pie style={{width:'17rem', height:'17rem'}} data={data}  />
         </div>
         <div className="cha">
            <Chart2 />
         </div>
         </div>
    </Chart1Styled>
  )
}

const Chart1Styled = styled.div`

.chart{
    background: #FCF6F9;
    border: 10px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 22rem;
    margin-left:1.5rem;
    margin-top:2rem;
 
}
.f{
    display:flex;
    justify-content:space-between;
   
}


`;


export default Chart1;

