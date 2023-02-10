import React from 'react'
import styled from 'styled-components'

const CardDiv=styled.div`
@media (max-width: 700px) {
    margin:10px;
    width: 18rem;
    height: 10rem;
}
cursor: pointer;
transition: transform .2s;
background-color: aliceblue;
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
width: 24rem;
height: 14rem;
box-sizing: border-box;
border: 1px solid #D7DFE9;
border-radius: 4px;
padding: 0px;
margin-left: 4rem;
margin-top: 3rem;
p{
    margin-left: 4rem;
}
img{
    @media (max-width: 700px) {
        width: 4rem;
    }
    width: 6rem;
    border-radius: 99%;
    margin-bottom: 2rem;
}
&:hover{
    transform: scale(1.1);
}
`
const Card = ({Email,FirstName,LastName,Avatar}) => {
  return (
    <CardDiv>
        <img src={Avatar}/>
        <div>
            <p>Email : {Email}</p>
            <p>FirstName : {FirstName}</p>
            <p>LastName : {LastName}</p>
        </div>
    </CardDiv>
  )
}

export default Card