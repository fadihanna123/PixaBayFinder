import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * 
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 100%;
    transition: 0.3s;
  }

  .spinner:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 40%;
    left: 50%;
    height: 60px;
    width: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border-radius: 50%;
    border: 3px solid lightgray;
    border-top-color: #0275d8;
    animation: spinner 0.7s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);  
      transition: 0.3s;
    }
  }


  img
  {
    width: 100%;
    max-width: 100%;
    height: auto;
    transition: 0.3s;
  }

  @media (max-width: 1500px)
  {
    body
    {
      margin: 0;
      padding: 0;
      font-size: 100%;
      width: 100%;
    }

  }

`;
