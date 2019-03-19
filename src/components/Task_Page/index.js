import React from 'react';

// export class Topic extends React.Component {

//not working as task/description is not defined
// componentWillMount(){
//     if (this.props) {
//         this.setState({
//             task: this.props.location.state.task,
//             description: this.props.location.state.description,
//         })
//     }
// // }

// const INITIAL_STATE = {
//     task: '',
//     description: '',
// }



//Object Destrcturing of Props Recieved
// from React Router passed as Arguments


export const TaskPage = ({history, location}) => {
// constructor(props){
//     super(props)
//     this.state = {...INITIAL_STATE}
// }

    // componentWillMount() {
    //     console.log(this.props);

    //     if (this.props.location.state === undefined) {
    //         this.props.history.push('/todo');
    //     } else {
    //         this.setState({
    //             task: this.props.location.state.task,
    //             description: this.props.location.state.description,
    //         })
    //     }
    // }

    // componentWillUnmount(){
    //     this.setState({
    //         task: '',
    //         description: '',
    //     })
    // }

    // render() {

    
        if (location.state === undefined) {
            history.push('/todo');
            return null
        } else {
            const taskInfo = location.state;  
        return (
            <div className="App">
            <div className="App-header">
                <h2>
                    Task : {taskInfo.task}
                </h2>
                <h2>
                    Description: {taskInfo.description}
                </h2>
                </div>
            </div>
        )
    }
}