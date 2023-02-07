import styled, { keyframes }from "styled-components";

const animationHome = keyframes`
  to{
    opacity: 1;
  }
`;





export const Container2 = styled.form`
animation: ${animationHome} 1s forwards;
opacity: 0;
@media (max-width: 620px){
    border-radius: 0px 0px 20px 20px;
    width:70%;
    height:150px;
    div{
  
     width:100%;
     display:flex;
    flex-direction:column;


  
 }

 button{
   margin-bottom:785px;
   margin-left:280px;
    box-sizing:border-box;
    position: absolute;
    
}


}

div{
  
    width:100%;
    display:flex;
    justify-content:space-evenly;

    
}

button{
    background-color:#ADD8E6;
  
    border-radius:20px;
    transition: all 0.8s;
    font-size: 0.8rem;
    font-weight: 100;
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

padding-top:20px;
width:50%;
height:400px;
background-color:#d6e8f8;
position:relative;
gap:12%;
display:flex;
flex-direction:column;
align-items:center;
border-radius: 0px 20px 20px 0px;
h3{
    
    font-size: 1.1rem;
    color: var(--black-1);
    font-weight: bold;
    text-align: center;
    
    border-bottom: solid 2px #32a1ce;
        
       
}

`