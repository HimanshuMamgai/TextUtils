import React from 'react'
import NumberList from './NumberList';

export default function Summary(props) {
    return (
        <>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{props.wordCount} words and {props.characterLength} characters</p>
                <p>{props.timeToRead} minutes to read</p>
                <h2>Preview</h2>
                <p>{props.input}</p>
                <h2>Emails</h2>
                <NumberList emails={props.emails} />
            </div>
        </>
    );
}