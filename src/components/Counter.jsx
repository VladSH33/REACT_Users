import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(5)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}>Плюс</button>
            <button onClick={() => {setCount(count - 1)}}>Минус</button>
        </div>
    );
};

export default Counter;