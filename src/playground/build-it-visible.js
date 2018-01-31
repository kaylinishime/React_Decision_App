// Create VisibilityToggle component - define render, constructor (because we want to set up default state, and also bind methods), handleToggleVisibility
// our state, visbility --> false



class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      visibility: false
    }

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility(){
      this.setState((prevState)=> {
        return {
          visibility: !prevState.visibility
        }
      })
    }

  render(){
    return(
      <div>
     <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
      </button>
      {this.state.visibility && (
          <div>
              <p>Hey. These are some details you can now see!</p>
            </div>
        )}
        </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));





// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// }
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'));
// }
// render();
