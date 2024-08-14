import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
function Mydemo(){
  return(
  <div>
    <Header/>
    <Footer/>
    <Content/>
  </div>
  );
}

ReactDOM.render(<Mydemo/>,document.getElementById("root"));