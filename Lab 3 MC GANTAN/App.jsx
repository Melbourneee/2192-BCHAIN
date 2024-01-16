
import { useState } from 'react'
import React from 'react';
import './App.css'
import ConditionalDemo1 from './Components/ConditionalDemo1';
import ConditionalDemo2 from './Components/ConditionalDemo2';
import ConditionalDemo3 from './Components/ConditionalDemo3';
import ConditionalDemo4 from './Components/ConditionalDemo4';

function App() {
  return (

      <div>
        <h1>MC GANTAN</h1>
        <h1>Conditional Demo 1</h1>
        <ConditionalDemo1/>
        <h1>Conditional Demo 2</h1>
        <ConditionalDemo2/>
        <h1>Conditional Demo 3</h1>
        <ConditionalDemo3/>
        <h1>Conditional Demo 4</h1>
        <ConditionalDemo4/>


      </div>
  )
}

export default App
