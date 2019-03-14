import React from 'react';

import loader from './loader.gif'

import './styles.css';

export const Loader = () => {
    return (
        <div>
            <div id="hello">
                <div id="overlay">
                    <div className="loader-image">
                        <img src={loader} alt='loading' />
                    </div>
                </div>
            </div>
        </div>
    )
}