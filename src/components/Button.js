import React from 'react'

export default function Button(props) {
    return (
        <>
            <button className={`btn btn-${ props.btnStyle } mx-2`} onClick={props.handleAction}>{props.text}</button>
        </>
    );
}