const app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of a computer!",
    options: []
}

const onFormSubmit = (e) =>{
e.preventDefault();
const option = e.target.elements.option.value;

if (option){
    app.options.push(option);
    e.target.elements.option.value = " ";
    renderPage();
}
};

const onremoveAll = (e) =>{
    app.options = [];
    renderPage();
} 



const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length)
    const choice = app.options[randomNum];
    alert(choice);
}


const appRoot = document.getElementById("app");

const numbers = [5, 74, 8650]

const renderPage = () =>{
 
const template = <div>
<h1>{app.title}</h1>
<h3>{app.subtitle && <p>{app.subtitle}</p>}</h3>
<p>{app.options.length > 0 ? "here are your options" : "no options"}</p>
<button disabled={app.options.length < 2} onClick={onMakeDecision}>What should I do?</button>
<button onClick={onremoveAll}>Remove All</button>
<ol>
  {
      app.options.map((option) => {
          return <li key={option}>{option}</li>
      
  })
    }
</ol>
<form onSubmit={onFormSubmit}>
<input type="text" name="option"></input>
<button>Add option</button>
</form>
</div>


ReactDOM.render(template, appRoot);}

renderPage();