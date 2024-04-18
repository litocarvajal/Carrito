import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd})=> {
    const [count, setCount] = useState(initial);

    const handleIncrement = () =>{
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const handleDecrement = () =>{
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () =>{
        if (count > 0 && count <= stock) {
            onAdd(count)         
        }
    }

    return(
        <div>
            <button type="button" class="btn btn-outline-primary btn-sm" onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button type="button" class="btn btn-outline-primary btn-sm" onClick={handleIncrement}>+</button>
            <button type="button" class="btn btn-primary btn-sm" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )

};
export default ItemCount;