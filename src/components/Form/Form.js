import React from 'react';

const Form = (props) => {

    return (
        <div className='Form'>
            <input type='text' value={props.itemT} onChange={props.changeItem}/>
            <input type='number' value={props.numberP} onChange={props.changeCost}/> KGS
            <button onClick={props.addItems}>Add</button>
            <p>{props.totalP}</p>
        </div>
    );
};

export default Form;