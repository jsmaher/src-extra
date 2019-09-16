import React from 'react';
import './App.css';
import AppRouter from './Config/Router/router'
import Appbar from './Components/Appbar/appbar';

class App extends React.Component{
  render(){
    return(
      <div>
        <Appbar/>
      <AppRouter />
      </div>
    )
  }
}

export default App;
