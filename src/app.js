import React from 'react';
import ReactDOM from 'react-dom';
import DecisionApp from './components/DecisionApp';

class App extends React.Component {
  render(){
    return(
      <DecisionApp />
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
