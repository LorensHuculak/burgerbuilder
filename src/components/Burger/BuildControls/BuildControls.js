import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Meat', type:'meat'},
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
];

const buildControls = (props) => (

    <div className="BuildControls">
    <p><strong> {props.totalPrice.toFixed(2)} <i className="fab fa-ethereum "></i> </strong></p>
{controls.map(ctrl => (
     <BuildControl 
     key={ctrl.label} 
     label={ctrl.label} 
     disabled={props.disabled[ctrl.type]}
     added={() => props.ingredientAdded(ctrl.type)}
     removed={() => props.ingredientRemoved(ctrl.type)}
     />
    ))}
    <button 
    className="OrderButton"
    disabled={!props.purchasable}
    onClick={props.ordered}>Add to Cart</button>
    </div>
);

export default buildControls;