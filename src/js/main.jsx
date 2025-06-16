import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>,
// );


let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

setInterval(function(){

  num1++;

  if (num1 > 9) {
    num1 = 0;
    num2++;
  }

  if (num2 > 9) {
    num2 = 0;
    num3++;
  }

  if (num3 > 9) {
    num3 = 0;
    num4++;
  }

  if (num4 > 9) {
    num4 = 0;
    num5++;
  }

  if (num5 > 9) {
    num5 = 0;
    num6++;
  }

  // if (num6 > 9) {
  //   num6 = 0;
  // }

  


  // console.log(num1);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home digito1={num1} digito2={num2} digito3={num3} digito4={num4} digito5={num5} digito6={num6} />
  </React.StrictMode>,
)
}, 100);
