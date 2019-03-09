import React, { Component } from 'react';

import { CreateTask } from '../Create_Task';
import {TaskList} from '../Task_List';
 

const INTITIAL_STATE = {
    tasks: [],
    task: '',
    description: '',
    isUpdate: false,
    arrLoc: '',
}

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {...INTITIAL_STATE};


        // this.handleTaskChange = this.handleTaskChange.bind(this);


        //without binding in a static method function "this."  wont work
        //in contrast "this" works fine with fat arrow functions. 
        // this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    addTask = event => {
        const { tasks , task , description } = this.state;
        tasks.push({task , description});
        this.setState({
            tasks
        })
        this.setState({
            task: '',
            description: '',
        }, ()=> alert("Task Added"));
        event.preventDefault();        
    }


    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }


//We can transfer Functions Through Props

//in contrast "this" works fine with fat arrow functions. 
    onDeleteHandler = (itemIndex)=>{
        let tasks = this.state.tasks;
        tasks.splice(itemIndex, 1);
        this.setState({
             tasks 
        }, ()=> alert("Task Deleted"));
    }

    onEditHandler = (event) =>{
        console.log(event);
        let {task , description} = this.state.tasks[event];
        // let description = this.state.tasks[event].description;
        this.setState({
            isUpdate: true,
            arrLoc: event,
            task,
            description
        })
    }

//SetState Behaves Async and can receive a callback as argument in which 
//We can pass on complete alert.

    onUpdateHandler = (event) =>{
        console.log(event);
        let {tasks , task , description, arrLoc} = this.state;
        tasks.splice(arrLoc, 1, {task ,description});
        this.setState({
            tasks,
        });
        this.setState({
            ...INTITIAL_STATE,
        }, ()=> alert("Task Updated"));
    }


    // handleOperation = (i, item , op) => {
    //     if (op === "edit") {
    //     const {editTask} = this.state.tasks[i];
    //     this.setState({
    //         editTask : [{
    //             task: item.task,
    //             description: item.description,
    //             location: i,
    //         }]
    //     })

    //     console.log(editTask);
        

    //     } else if (op === "del") {
         
    //     }
    // }


    render() {
        return (
            <div>
                <CreateTask onUpdate={this.onUpdateHandler} isUpdate={this.state.isUpdate} task={this.state.task} description={this.state.description} onChange={this.onChange} add={this.addTask} />
                <TaskList tasks={this.state.tasks} edit={this.onEditHandler} delete={this.onDeleteHandler} />
            </div>
        )
    }
}

export { TodoApp };