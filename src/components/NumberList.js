import React from 'react'

export default function NumberList(props) {
    const emailItems = props.emails && props.emails.map((email) => 
        <li>{email}</li>
    )
    return (
        <ul>{emailItems}</ul>
    );
}