import { useState } from 'react';
import './App.css';


const App = () => {

    const [count, setCount] = useState(0);

    const increment = () => {setCount(count + 1)};
    const decrement = () => {setCount(count - 1)};

    return (
        <div className="App">
            <header className='header'>Counter</header>
            <div className='currentCount'>{count}</div>
            <div className='buttonBlock'>
                <button className='button' onClick={increment}>Plus</button>
                <button className='button' onClick={decrement}>Minus</button>
            </div>
        </div>
    );
}; 


export default App;