import React from "react";
import './emailbody.styles.css'

const EmailBody = ({ email }) => {
    const { from, subject, address, time, message, read } = email;

    return (
        <div className='body-container'>
            <h2>Subject: {subject}</h2>
            <p>From: {from} &lt;{address}&gt;</p>
            <p>Date: {time}</p>  
            <h3>Message:</h3>
            <p>{message}</p>
        </div>
    )
};

export default EmailBody;