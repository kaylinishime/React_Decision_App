const obj = {
  name: 'Vikram',
  getName(){
    return this.name;
  }
}

// console.log(obj.getName());
// const getName = obj.getName; // the constant does not carry the function details with it, the details of the function are undefined.
const getName = obj.getName.bind({name: 'Andrew'}) //.bind() takes an argument that can carry the contents of an object
console.log(getName());


class IndecisionApp extends React.Component {
  constructor(props){
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount(){

      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if (options) {
          this.setState(() => ({ options: options }));
        }
      } catch (e) {
        // Do nothing at all
      }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  handleDeleteOptions(){
    this.setState(()=> ({ options: [] }));
  }

  handleDeleteOption(optionToRemove){
   this.setState((prevState) => ({
     options: prevState.options.filter((option)=> optionToRemove !== option)
   }));
  }

// create new method, handlePick - pass down to Action and setup onClick - bind it up here
// it will randomly pick an option and alert it
handlePick(){
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];
  alert(option);
}

handleAddOption(option){

if (!option) {
  return 'Enter valid value';
} else if (this.state.options.indexOf(option) > -1 ){
  return 'This option already exists';
}


  this.setState((prevState) => ({
      options: prevState.options.concat([option])
      // .concat allows you to add an array without manipulating the old one
  }));
}

  render(){
    const subtitle = "Put your life in the hands of a computer";


    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0 }
          handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}/>
        <AddOption
        handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle &&       <h2>{props.subtitle}</h2> }

      </div>
    )
}

Header.defaultProps = {
  title: 'Indecision'
}
// you can setup a default prop to stateless components. Ex. if there was no title prop provided

const Action = (props) => {
    return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}>What Should I do?</button>
      </div>
    )
}

// Render new p tag for each option (set text, set key)
// Add Remove All button
// Setup handleRemoveAll --> alert some message
// setup onClick to fire the method

const Options = (props) => {
  // constructor(props){
  //   super(props);
  // }
    // ensures that you have access to this.props, need constructor to override constructor function
    // this.handleRemoveAll = this.handleRemoveAll.bind(this);


// handleRemoveAll(){
  // alert('some message');
  // console.log(this.props.options) //<-- can NO longer access 'this' because using a call back function.
// }

    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
          props.options.map((option)=> (
            <Option
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}/>
        ))
      }
      </div>
    )
}

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}>
          remove
        </button>
      </div>
    )
}

// 1. Set up the form with text input and submit button
// 2. Wire up on submit
//  3 handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  }

// we need to pass in "e" argument for submit inputs
// you dont need to add a event handler on <button> because the form knows
handleAddOption(e){
  e.preventDefault();
  // ALWAYS add this for form handler events!
  const option = e.target.elements.option.value.trim();
  // .trim() takes out all the spaces in the value
  const error = this.props.handleAddOption(option);

  this.setState(() =>  ({ error}));
      // error: error

      if (!error) {
        e.target.elements.option.value = '';
      }
}

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



// Example of a STATELESS COMPONENT
  // - it does not have access to props unless you pass it in as an argument
  //  - do not need to use this.props once you pass it in as an argument
  // you take out render(){}
  //  these are faster than class based components (no code that needs to manage state), so we should use them as much as possible


// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: </p>
//     </div>
//   );
// }
//
// ReactDOM.render(<User name="Kayli" />, document.getElementById('app'));
