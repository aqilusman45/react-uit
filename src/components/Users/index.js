import React from 'react';

import { ContactList } from '../Contact_List';

// import * as ROUTES from '../../constants/routes';

import { withRouter } from 'react-router-dom';

const INITIAL_STATE = {
    users: [],
    isLoading: true,
}



class Users1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };
    }


    // componentWillMount() {
    //     console.log("Component Will Mount");

    //JAVASCRIPT FETCH API IS THE PERFECT SOLUTION FOR XHR REQUESTS 



    //THIS WAS PROBLEMATIC BECAUSE ITS ASYNC BEHAVIOR CAUSED THE ARRAY
    //TO BE INITIALISED WITH EMPTY VALUE OR OBJECT

    // let callUsers = ()=>{
    //   return new Promise(function (resolve, reject) {
    //     var xmlhttp = new XMLHttpRequest();
    //         Do some Async stuff
    //         call resolve if it succeeded
    //         reject if it failed
    //       });
    // }
    // xmlhttp.onreadystatechange = function () {
    //     if (this.readyState === 4 && this.status === 200) {
    //         let myObj = JSON.parse(this.responseText);
    //         myObj.results.map( item =>{
    //             users.push(item);
    //         })
    //     }
    // };        
    // xmlhttp.open("GET", "https://randomuser.me/api/?results=20", true);
    // xmlhttp.send();
    // this.setState({
    //     users
    // },()=>{
    //     console.log(this.state);
    // })
    // }

    componentWillMount() {        
        // var {users} = this.state;
        fetch("https://randomuser.me/api/?results=20")
            .then((resolve) => {
                return resolve.json()
            })
            .then((object) => {
                const users = object.results
                    .map((item) => {
                        return item;
                    })
                return users
            })
            .then((users) => {
                this.setState({
                    users,
                    isLoading: false,
                })
            })
            .catch((reject) => {
                console.log(reject);
            })
    }

    //   getConversations = () => {
    //     axios.get('https://randomuser.me/api/?results=20').then(response => {
    //       this.setState(prevState => {
    //         let conversations = response.data.results.map(result => {
    //           return {
    //             photo: result.picture.large,
    //             name: `${result.name.first} ${result.name.last}`,
    //             text: 'Hello world! This is a long message that needs to be truncated.'
    //           };
    //         });

    //         return { ...prevState, conversations };
    //       });
    //     });
    //   }

    // getUsers(){

    // }


    // You should not call setState() in componentWillUnmount() because the
    //  component will never be re-rendered. Once a component instance is unmounted,
    //   it will never be mounted again.

    // getInitState(){
    //     console.log("Initial State");
    //     let {users} = this.state;
    //     users = [];
    //     this.setState({
    //         users
    //     },()=>{
    //          console.log(this.state);
    //      })
    // }

    getUserPage = (item)=> {
        this.props.history.push(`/users/${item.name.first}`, item)   
    }

    // componentWillUnmount(){
    //     console.log("Component Will Unmount");
    //     this.setState({
    //         users: [{user: ''}]
    //     },()=>{
    //         console.log(this.state);
    //     })

    // }

    render() {
        // console.log("Render HTML");
        return (
            <div className="App">
                <div className="App-header">
                <h1>User List</h1>
        <div className="Contact-List">

                    <ContactList profile={this.getUserPage} isLoading={this.state.isLoading} item={this.state.users} />

                    {/* {
                <ul>
                {
                    this.state.users.map((item, itemIndex) => {
                        return (
                        <li key={itemIndex}>
                            <div>
                                <div>
                                    <img alt={`${item.name.first} ${item.name.last}`} src={item.picture.thumbnail} />
                                </div>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
            } */}
            </div>

                </div>
            </div>
        )
    }
}

const Users = withRouter(Users1);

export {Users};