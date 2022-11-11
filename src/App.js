import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Menu from './components/Menu';



function App() {
  const [visibility,setVisibility] = useState("none");
  function displaySetter(){
    if(visibility==="none") setVisibility("block");
    else setVisibility("none");
  }
  return (
    <div className='App'>
      <Header displaySetter = {displaySetter}/>
      <Menu display={visibility}/>

      <div style={{position:"sticky",marginTop:"100px"}}>
      <Section1/>
      <Section2/>
      <Section3/>
      </div>
    </div>
  );
}

export default App;
