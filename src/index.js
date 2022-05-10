import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class Sample extends React.Component
// {
// constructor(props) {
// super(props);

// this.state = { value: [] };
// this.handleChange = this.handleChange.bind(this);

// }
// handleChange(event) {
// this.setState({ value: event.target.value });
// }
// getRawMarkup() {
//   return { __html: this.state.value};
// }
// render()
// {
//   return <>
  // <div className='box'>
  //   <div className='box1'>
  //   <h1 className='h1'>Input </h1>
//   <textarea className='textarea' onChange={this.handleChange} value={this.state.value}> </textarea>

  // </div>
//   <div id="box5">
//   <h1 className='h2'> Output</h1>
//  <div className='box4' value={this.state.value}  dangerouslySetInnerHTML={this.getRawMarkup()}></div>
//  </div> 
//   </div>
   

  


//   </>
// }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Sample/>);

function Sample(props)
{
  let [value1,setValue1] = useState('')

  return<>
    <div className='box'>

    <div className='box1'>
    <h1 className='h1'>Input </h1>
  <textarea value={value1} onChange={(e)=>{setValue1(e.target.value)}}> </textarea>
  </div>

  <div id="box5">
  <h1 className='h2'> Output</h1>
  <p className='box4'>{value1}</p>
  </div>
  </div>
  </>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);

