//Melbourne Gantan WD-401

import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';


function App() {

  return (
    <>
      <div>
        <h1>React Props Example</h1>
    <Hello/>
    <Welcome/>
    <ParentComponent/>
    <ChildComponent/>
      </div>
    </>
  )
}

export default App
