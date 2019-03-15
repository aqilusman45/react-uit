import React from 'react'

import { WithLoader } from '../WithLoader';

const ContactList1 = (props) => {
    return (
        <div className="Contact-Container">
            {
                props.item.map((item, itemIndex) => {
                    return (
                        <div key={itemIndex} className="Contact-Item" onClick={() => props.profile(item)}>
                            <div>
                                <img alt={`${item.name.first} ${item.name.last}`} src={item.picture.thumbnail} />
                            </div>
                            <div className="Contact-Name">
                                <p>{`${item.name.first} ${item.name.last}`}</p>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )

}

const ContactList = WithLoader(ContactList1);

export { ContactList };