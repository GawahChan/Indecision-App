class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    }


    //Using setState as a function
    //Prevents issues if you need to use setState twice!!!!
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>Add by One</button>
                <button onClick={this.handleMinusOne}>Minus by One</button>
                <button onClick={this.handleReset}>Reset to 0</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));





// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const resetCounter = () => {
//     count = 0;
//     renderCounterApp();
// };
// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>Add by 1</button>
//             <button onClick={minusOne}>minus One</button>
//             <button onClick={resetCounter}>reset counter</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();