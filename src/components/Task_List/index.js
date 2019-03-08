import React, {Component} from 'react';

import {TaskView} from '../Task_View';
import {TaskHandlers} from '../Task_Handlers';


const INITIAL_STATE = {
    tasks: [],
}
export default class TaskList extends Component{
    constructor(props){
        super(props)
        this.state = {...INITIAL_STATE};
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }

    // componentWillReceiveProps(){
    //     this.getTasksArray();
    // }
    
    // getTasksArray(){
    //     this.setState({
    //         tasks: this.props.tasks,
    //     });
    // }

    //there is no need to use onChange Event Listener 
    //Functions can be called using Props From Parent

    // handleDelete = (i, item , op) =>{
    //     this.props.onChange(i, item , op);
    // }

    // handleEdit = (i, item , op) =>{
    //     this.props.onChange(i, item , op);
    // }

    render(){
        return(
            <div>
                <h1>ToDo</h1>
                    {
                        this.props.tasks.map((item,i)=>{
                            return (
                                <div key={i}>
                                    <TaskHandlers delete={()=> this.props.delete(i)} keys={i} edit={()=> this.props.edit(i)} />
                                    <TaskView item={item} keys={i}/>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}