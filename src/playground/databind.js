class Counter extends React.Component {
constructor(props){
super(props);
this.handleAddOne = this.handleAddOne.bind(this);
this.handleMinusOne = this.handleMinusOne.bind(this);
this.handleReset = this.handleReset.bind(this);
this.state = {
    count: 0
};
}

handleAddOne(){
    this.setState((prevState) =>{
        return{
            count: prevState.count + 1
        }

    })
}

handleMinusOne(){
    console.log("minusone")
}

handleReset(){
    console.log("reset")
}

    render(){
        return <div>
        <h1>Count:</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>
    }
}

ReactDom.render(<Counter/>, document.getElementById("app"))