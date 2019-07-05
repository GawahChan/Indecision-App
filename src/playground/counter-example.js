let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const resetCounter = () => {
    count = 0;
    renderCounterApp();
};
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>Add by 1</button>
            <button onClick={minusOne}>minus One</button>
            <button onClick={resetCounter}>reset counter</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();