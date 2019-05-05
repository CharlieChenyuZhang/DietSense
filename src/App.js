import React from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonAppBar from './components/ButtonAppBar'

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to DietSense!
        </p>
      </header>
    </div>
  )
}

export default App;
