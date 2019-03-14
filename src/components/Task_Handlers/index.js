import React from 'react';

//Edit and Delete Tasks
export const TaskHandlers = (props) => {
    console.log(props);
    let isDisabled = props.isUpdate ? true:false;
    return (
        <div>
            <button onClick={()=>props.edit(props.keys)} >Edit</button>
            <button disabled={isDisabled} onClick={()=> props.delete(props.keys)}>Delete</button>
        </div>
    )
}