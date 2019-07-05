console.log('Build-it-visible app is running!');

let visibility = false;

const toggleVisibility = () => {
    visibility =!visibility;
    render();
}

const render = () => {
    const visibilityApp = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                visibility && (
                    <div>
                        <p>Hey! these are some details, you can now see! </p>
                    </div>
                )
            }
        </div>
    );
    ReactDOM.render(visibilityApp, document.getElementById('app'));
}

render();