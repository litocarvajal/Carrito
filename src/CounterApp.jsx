import { useState, useEffect } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('El contador ha sido actualizado', count);
    }, [count]);

    const incrementar = () => {
        setCount(count + 1);
    }
        return (
            <div>
                <h2>Contador</h2>
                <button type="button" class="btn btn-outline-primary btn-sm" onClick={incrementar}>+</button>
                <span>{count}</span>
            </div>
        );
    };


export default CounterApp;