import React from 'react'
//import './sass/app.scss'
import './App.css'
import TopSection from './components/top/index'
import BottomSection from './components/bottom/index'


class App extends React.Component{

  render(){
    return(
     <div className='app-container'>
        <div className='main-container'>
          
          <div className='top-section'><TopSection /></div>
          <div className='bottom-section'><BottomSection /></div>
        </div>
     </div> 
    )
  }
}

export default App

