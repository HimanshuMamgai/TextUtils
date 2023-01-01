import React, { useState } from 'react'
import Button from './Button';
import Summary from './Summary';

export default function TextForm(props) {
    const [text, setText] = useState(''); 
    const [email, setEmail] = useState([]);

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }

    const handleClearClick = () => {
        setText("");
        setEmail("");
        props.showAlert('Cleared Textbox', 'success');
    }

    const extractEmail = () => {
        let wordsArray = text.split(" ");
        let foundEmails = [];
        
        wordsArray.forEach((word) => {
          let emailPattern = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}/;
          let foundEmail = word.match(emailPattern);
          if (foundEmail) {
            foundEmails.push(foundEmail[0]);
          }
        });

        setEmail([foundEmails])
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        if(text.innerHTML === '') {
            props.showAlert('No text to copy', 'danger');
        } else {
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert('Copied to clipboard', 'success');
        }
    }

    return (
        <>  
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <Button text="Convert to Upercase" data={text} btnStyle='primary' handleAction={handleUpClick} />
                <Button text="Convert to Lowercase" data={text} btnStyle='primary' handleAction={handleLowClick} />
                <Button text="Copy to clipboard" data={text} btnStyle='primary' handleAction={handleCopy} />
                <Button text="Extract Emails" data={text} btnStyle='primary' handleAction={extractEmail} />
                <Button text="Clear Text" data={text} btnStyle='danger' handleAction={handleClearClick} />
            </div>
            <Summary 
                wordCount= {text ? text.match(/\S+/g).length : 0} 
                characterLength= {text ? text.match(/\S/g).length : 0} 
                timeToRead = {text ? 0.008 * text.match(/\S/g).length : 0}
                input = { text ? text :  'Enter something in the textbox above to preview it here'}
                emails = {email}
            />
        </>
    );
}