
class Counter extends React.Component {
 constructor(props){
   super(props);

   this.handleOne = this.handleOne.bind(this);
   this.handleMinusOne = this.handleMinusOne.bind(this);
   this.handleReset = this.handleReset.bind(this);

   this.state = {
     count: props.count
   }
 }

 handleOne(){
   this.setState((prevState)=> {
     // setState's first argument, prevState, gives you access to the previous state
     return {
       count: prevState.count + 1
     };
   });
 }

 handleMinusOne(){
   // Call this.setState decrement the count by 1
   this.setState((prevState) => {
    return {
       count: prevState.count - 1
     };
  });
 }

 handleReset(){
   this.setState(() => {
     return {
       count: 0
     };
   });

   // ALTERNATE SYNTAX, but passing ina  function for setState is more preferred since setState is called asyncronously

   // this.setState({
   //   count: 0
   // });
   // this.setState({
   //   count: this.state.count + 1
   // })
   // this.setState is an asyncronous call, so this one ahead will trigger first and not actually reset to 0

   this.setState((prevState) => {
     // passes in the previous this.setState count 0 as 'prevState'
     return {
       count: prevState.count + 1
     };
   });
 }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Create three methods: handleOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

Counter.defaultProps = {
  count: 0
}
// if not prop is passed in below, then default prop will be passed in

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }


// Andrews Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );
//   ReactDOM.render(templateTwo, appRoot);
// }
//
// renderCounterApp();
