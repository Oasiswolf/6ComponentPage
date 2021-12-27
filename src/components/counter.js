import React, { useState }  from 'react'



export default function counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <hr />
            <button onClick={() => setCount(count +1)}>UP</button>
            <h1 style={{textAlign:"center"}}>{count}</h1>
            <button onClick={() => setCount(count - 1)}>DOWN</button>
            <hr />
        </div>
    )
} 