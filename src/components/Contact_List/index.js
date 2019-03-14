import React from 'react'

import { WithLoader } from '../WithLoader';

const ContactList1 = (props) => {
    console.log(props);
    
    return (
            <div>
                {
                    props.item.map((item, itemIndex) => {
                        return (
                            <div key={itemIndex}>
                                <div className="Contact-Container">
                                    <div className="Contact-Details">
                                        <div>
                                        <img alt={`${item.name.first} ${item.name.last}`} src={item.picture.thumbnail} />
                                        </div>
                                        <div>
                                        <span>{` ${item.name.title} ${item.name.first} ${item.name.last}`}</span>
                                        </div>
                                    </div>
                                </div>
                                 <hr/>       
                            </div>
                            
                        )
                    })
                }
            </div>
    )

}

const ContactList = WithLoader(ContactList1);

export { ContactList };