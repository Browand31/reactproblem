class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
             options : []
        };

    }

    handleDeleteOptions(){
        this.setState(() =>{
            return {
                options: []
            };

        });
    }

    handlePick(){
        
        
                 randomNum = Math.floor(Math.random() * this.state.options.length);
                 option = this.state.options[randomNum];
                alert(option);
          
  }
    handleAddOption(){
        if (!option){
            return "enter valid value to add item"
        }
        else if (this.state.options.indexOf(option) >-1){
            return "this option already exists!"
        }
        

    this.setState((prevState) =>{
        return {
            options: prevState.options.concat(option)
        };
    });
    }
    render(){
        const title = "Indecision"  
     const subtitle = "Put your life in the hands of a computer!"
       
        return <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length >2}
        handlePick={this.handlePick}/>
        <Options options= {this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption
        handleAddOption={this.handleAddOption}/>

        </div>
    }
}

class Header extends React.Component {
 render(){
     
     return <div>
     <h1>{this.props.title}</h1>
     <h2>{this.props.subtitle}</h2>
     </div>
 }
}

class Action extends React.Component {
    
    render(){
        return <div>
        <button onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}>
        What should I do?
        </button>
        </div>
    }
}

class Options extends React.Component {
    
    
    
    render(){
        
        return <div>
     <button onClick={this.props.handleDeleteOptions}>Remove All</button>
    {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
        </div>
    }
}

class Option extends React.Component {
    render(){
        return <div>
      Option:  {this.props.optionText}
        </div>
    }
}

class AddOption extends React.Component {
    constructor(){;
        super(props)


    }
    onFormSubmit(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
      
        this.setState(() =>{
            return {
                error 
            };
        })
      
    }
    render(){
        return <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
<input type="text" name="option"></input>
<button>Add option</button>
</form>
        </div>
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));