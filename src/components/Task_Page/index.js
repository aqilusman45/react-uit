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
// }

const INITIAL_STATE = {
    task: '',
    description: '',
}

export class TaskPage extends React.Component {
constructor(props){
    super(props)
    this.state = {...INITIAL_STATE}
}

    componentWillMount() {
        console.log(this.props);

        if (this.props.location.state === undefined) {
            this.props.history.push('/todo');
        } else {
            this.setState({
                task: this.props.location.state.task,
                description: this.props.location.state.description,
            })
        }
    }

    // componentWillUnmount(){
    //     this.setState({
    //         task: '',
    //         description: '',
    //     })
    // }

    render() {
        return (
            <div className="App">
            <div className="App-header">
                <h2>
                    Task : {this.state.task}
                </h2>
                <h2>
                    Description: {this.state.description}
                </h2>
                </div>
            </div>
        )
    }
}