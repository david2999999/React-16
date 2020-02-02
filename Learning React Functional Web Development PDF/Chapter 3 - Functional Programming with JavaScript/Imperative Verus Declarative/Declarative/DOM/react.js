const { render } = ReactDOM;

const Welcome = () => (
    <div id="welcome">
        <h1>Hello World</h1>
    </div>
);

render(
    <Welcome />,
    document.getElementById('target')
);