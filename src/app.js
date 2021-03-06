class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer"
        const options = ['thing 1', 'thing 2', 'thing 4'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption options={options}/>
            </div>
        );
    }
}


class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
       alert('handlePick'); 
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    
    handleRemoveAll() {
        console.log(this.props.options);
        // alert('Remove All')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map(option => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault(); //Prevents the default form submission process, and prevents full page refresh
        const option = e.target.elements.option.value.trim();       
       
        //e.target gets the element that triggered the specific event.
        //e.target.elements.option.value gets the value of the element called option (the input)
        // .trim() method removes leading and trailing spaces


        if (option) {
            alert(option);
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));