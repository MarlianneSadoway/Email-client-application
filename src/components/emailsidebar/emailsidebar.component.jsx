import React from "react";
import './emailsidebar.styles.css'

const EmailSidebar = ({ email }) => {
    const { from, subject, address, time } = email;

    return (
        <div className='sidebar-container'>
            <h2>Subject: {subject}</h2>
            <p>From: {from} &lt;{address}&gt;</p>
            <p>Date: {time}</p> 
        </div>
    )
};

export default EmailSidebar;