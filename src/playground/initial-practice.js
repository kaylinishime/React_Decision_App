console.log('App.js is running!');
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react


// Andrews 2nd Challenge:
// create app object -> title/subtitle with string values
// user title/subtitle in the template
// render template

const app = {
title: 'Indecision App',
subtitle: 'Put your life in the hands of a computer',
options: []
};

// Andrew's 3rd Challenge:
// only render subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length > o "Here are your options" "No options"

const onFormSubmit = (e) => {
  e.preventDefault(); // prevent the full page refresh on initial submit

  const option = e.target.elements.option.value;

  if (option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const removeAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  // generating a random number, multiplying it by the array length, and then rounding it using math.floor to get the INDEX
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      {
        /*
       numbers.map((number) => {
         return <p key={number}>number: {number}</p>
       })
       */
      }
      <ol>
      {
      /* map over app.options getting back an array of lis (set key and text) */
      app.options.map((option)=> {
        return <li key={option}>{option}</li>;
      })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}
render();

// Andrew's 1st Challenge:

// Create a templateTwo var JSX expresion
// div
// h1 --> Kayli Nishime
// p --> Age: 24
// p --> Location: Philadelphia
// Render templateTwo instead of template


// var templateTwo = (
//   <div>
//     <h1>Kayli Nishime</h1>
//     <p>Age: 24</p>
//     <p>Location: Los Angeles</p>
//   </div>
// );
