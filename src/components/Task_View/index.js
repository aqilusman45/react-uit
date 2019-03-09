import React from 'react';

//Functional Component Using Fat Arrow Functions
//Props Passed as Arguments

export const TaskView = (props) => {
    return (
        <div>
            <p><b>Task#{props.keys + 1}</b> :{props.item.task}</p>
            <p><b>Description</b> :{props.item.description}</p>
        </div>
    )
}