'use client';
import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    console.log("Counter component rendered");

    const handleIncrease = () => {
        console.log("Increase button clicked");
        setCount(count + 1);
    };
    return (
        <div>
           <h2 className="text-4xl font-bold mb-4">Counter</h2>

           <button 
           onClick={handleIncrease}
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Increase</button>
        </div>
    );
};

export default Counter;