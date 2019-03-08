import React from 'react';

//Edit and Delete Tasks

export const TaskHandlers = (props) => {
    return (
        <div>
            <button onClick={()=>props.edit(props.keys)} >Edit</button>
            <button onClick={()=> props.delete(props.keys)}>Delete</button>
        </div>
    )
}