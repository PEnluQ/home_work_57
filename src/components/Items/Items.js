import React from 'react';
import './Items.css'

const Items = (props) => {
    return (
        <div className='Items'>
            <h4>{props.name}</h4>
            <p>{props.price} KGS</p>
            <button onClick={props.removeI}>Delete</button>
        </div>
    );
};

export default Items;