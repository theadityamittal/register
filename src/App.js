import React from 'react';
import './App.css';
import Form from './components/form/Form'
import Confirm from './components/confirm/Confirm'
import Particles from 'react-particles-js';
import particlesOptions from './particles.json';

const initialState = {
  route: 'submit',
  user: {
    name: '',
    email: '',
    contact: '',
    dob: ''
  }
}

class App extends React.Component{
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
    route: 'confirm',
    user: 
    {
      name: data.name,
      email: data.email,
      contact: data.contact,
      dob: data.dob
    }})
  }

  render(){
    return (
      <div className='App'>
        <Particles className='particles' 
        params={particlesOptions}/>
        {
          this.state.route === 'submit'
          ?<Form loadUser={this.loadUser}/>
          :<Confirm userData={this.state.user}/>          
        }
      </div>            
    );
  } 
}

export default App;