/**
 * This is the component for the email body view. 
 * No email data is displayed in this section until an email is clicked on. 
 * When an email is clicked on, the full content of the email is displayed, 
 * including the email's message. 
 */
import React from "react";
import './emailbody.styles.css'

const EmailBody = ({ email }) => {
    // If no email has been selected yet, display an instructional message 
    if (!email) {
        return (
            <div className='body-container'>
                <p>Select an email to view the message</p>
            </div>
        );
    }

    // Set the variables with the values 
    const { from, subject, address, time, message } = email;

    // Display the contents of the email using the variables 
    return (
        <div className='body-container'>
            <h2>Subject: {subject}</h2>
            <p>From: {from} &lt;{address}&gt;</p>
            <p>Date: {time}</p> 
            <hr></hr> 
            <h3>Message:</h3>
            <p>{message}</p>
        </div>
    )
};

export default EmailBody;