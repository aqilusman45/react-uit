import React from 'react';

import './styles.css'


export const Profile = (props) => {

    if (props.location.state === undefined) {
        props.history.push('/users');
        return null
    } else {
        const userInfo = props.location.state;        
        return (
            <div className="App">
                <div className="App-header">
                    <div className="Profile-Page">
                        <div className="Profile-Picture">
                            <img alt={userInfo.name.first} src={userInfo.picture.large} />
                        </div>
                        <div className="Profile-Details">
                            <h1>{`${userInfo.name.first} ${userInfo.name.last}`}</h1>
                            <div className="Email-Tel">
                                <div>
                                    <a href={`mailto:${userInfo.email}`} >{userInfo.email}</a>
                                </div>
                                <div>
                                    <a href={`tel:${userInfo.cell}`}>{userInfo.cell}</a>
                                </div>
                            </div>
                            <div className="More-Detail">
                                <p>{`Age: ${userInfo.dob.age}`}</p>
                                <p>{`Gender: ${userInfo.gender}`}</p>
                                <p>{`City: ${userInfo.location.city}`}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
