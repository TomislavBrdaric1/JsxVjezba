const App = () => {
    const number = 6;

    return (
        <div>
            {number % 2 !== 0 && <h1>The number is not even</h1>}
            {!(number % 2) && <h1>The number is even</h1>}
        </div>
    );
};

export default App;
