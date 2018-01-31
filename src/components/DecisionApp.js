import React from 'react';
import ReactDOM from 'react-dom';
import DecisionButton from './DecisionButton';
import Options from './Options';
import TextInput from './TextInput';

class DecisionApp extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        options: []
      }
    }

  render(){
    return (
      <div>
      <h1>Indecision App</h1>
      <DecisionButton />
      <Options />
      <TextInput />
     </div>
    )
  }
}


export default DecisionApp;
