import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
function Mydemo(){
  return(
  <div>
    <Form/>
  </div>
  );
}

ReactDOM.render(<Mydemo/>,document.getElementById("root"));