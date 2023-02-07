import styled, { keyframes }from "styled-components";

const animationHome = keyframes`
  to{
    opacity: 1;
  }
`;

export const Form1 = styled.form`
animation: ${animationHome} 1s forwards;
opacity: 0;
padding-top:20px;
width:70%;
height:400px;
background-color:#F0F8FF;
position:relative;
display:flex;
flex-direction:column;
border-radius: 20px 0px 0px 20px;
align-items:center;
gap:5%;

@media (max-width: 620px){
    border-radius: 20px 20px 0px 0px;
    width:70%;
    height:380px;
}
span{
    color: var(--black-2);
    font-size: 0.8rem;
    padding-top:4px;
}
h2 {
    font-size: 1.3rem;
    color: var(--black-1);
    font-weight: bold;
    text-align: center;
  }
div{
  
   display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
}

button{
    background-color:#ADD8E6;
    width:40%;
    height:10%;
    border-radius:20px;
    transition: all 0.8s;
    font-size: 1.1rem;
    color: #000000;
    font-weight: bold;
    :hover{
   
        box-shadow:
                2px 2px  #001aff,
                3px 3px  #001aff,
                5px 3px  #001aff;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
        transform: scale(1.1);
        background-color:orange;
}
    
}

input{
    transition: all 0.8s;
    height:25px;
    border-radius:4px;
    border-bottom:solid 1px gray;
    :hover{
   

   transform: scale(1.1);
}
}
`



export const MainDiv = styled.div`
width:500px;
display:flex;

@media (max-width: 620px){
    display:flex;
    flex-direction:column;
    align-items:center;
}


`