import React from 'react'
import styled, { keyframes } from 'styled-components'
import { UseWindowSize } from '../../utils/UseWindowSize'

const orb = () => {
  
    const {width , height} = UseWindowSize()

    console.log(width, height)

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height/1.5}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `


const OrbStyled = styled.div`
   
   width: 70vh;
   height: 70vh;
   position: absolute;
   border-radius: 50%;
   margin-left: -37vh;
   margin-top: -37vh;
   background: linear-gradient(180deg, #f23670 0%, #F2994A 100%);
   filter: blur(250px);
   animation: ${moveOrb} 13s alternate linear infinite;

`;

  return (
    <OrbStyled></OrbStyled>
  )
}

export default orb;

