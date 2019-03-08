import React from 'react';



// const INITIAL_STATE = {
//     task: '',
//     description: '',
// }

// class CreateTask extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {...INITIAL_STATE};
//     }

// componentWillReceiveProps(){
//     this.getEditTask();
// }

// getEditTask(){
//    if (this.props.edit) {
//     let editTask = this.props.edit;
//     this.setState({
//         task: editTask.task,
//         description: editTask.description,
//         isEdit: true,
//         location: editTask.location,
// //      })
//    }
// }

//can be called from props

// addOnEvent = (e) => {
//     this.props.onChange(this.state);
//     this.setState({...INITIAL_STATE});
//     e.preventDefault();
// }


export const CreateTask = (props) => {
    return (
        <div>
            <form onSubmit={props.add}>
                <label>
                    Task
                <input required name={"task"} value={props.task} onChange={props.onChange} />
                </label>
                <br />
                <label>
                    Description
                <input required name={"description"} value={props.description} onChange={props.onChange} />
                </label>
                <br />
                {
                    props.isUpdate ? <button onClick={props.onUpdate}>Update</button> : <button>Add Task</button>
                }
            </form>
        </div>
    )
};
