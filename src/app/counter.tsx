// Counter.tsx
import React, { useState } from 'react';

interface CounterProps {
    initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
