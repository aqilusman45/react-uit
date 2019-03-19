import React from 'react';

import './styles.css'

//Object Destrcturing of Props Recieved
// from React Router passed as Arguments
export const Profile = ({location, history}) => {
    if (location.state === undefined) {
        history.push('/users');
        return null
    } else {
        const userInfo = location.state;        
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
