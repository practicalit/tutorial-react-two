import React from 'react'

const Checkbox = props => {
    function getLabel() {
        return props.label
    }

    return (
        <>
    {getLabel()}<input type="checkbox" name={props.name} 
    checked={props.checked} value={props.value}
    onChange={props.callback}
    />
    </>
    );

}

export default Checkbox;