
import React from 'react';

const Form = (props) => {

    return (
        <form>
            <input type="text" className="task" placeholder="Enter a ToDo.." value={props.input} onChange={(event) => props.setInput(event.target.value)} />

            <button type="button" className="button-add" onClick={() => props.handleChange()}>+</button>
        </form>
    )
}

export default Form;
 // event.target.value = is object and get data