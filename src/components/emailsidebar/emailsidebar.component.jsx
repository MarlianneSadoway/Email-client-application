/**
 * This is the component for a single email item in the email sidebar list. 
 * The email item will include from, subject, address, and time but not the email's message. 
 * The background of this component will depend on if the email is unread (grey) or has been read
 * (white). If the email is actively displayed in the body the background will be blue. 
 */
import React from "react";
import './emailsidebar.styles.css'

const EmailSidebar = ({ email, active }) => {
    const { from, subject, address, time, read } = email;

    // When an email is clicked within the Email Sidebar View (active), mark it as read 
    if (active) {
        email.read = "true";
    }

    // Email unread 
    if (read === "false") {
        return (
            // className will include "activeEmail" only if email is active 
            <div className={`sidebar-container unread`} id={active ? "activeEmail" : "inactive"} >
                <h2>Subject: {subject}</h2>
                <p>From: {from} &lt;{address}&gt;</p>
                <p>Date: {time}</p> 
            </div>
        )
    }
    // Email read 
    if (read === "true") {
        return (
            // className will include "activeEmail" only if email is active 
            <div className={`sidebar-container read`} id={active ? "activeEmail" : "inactive"} >
                <h2>Subject: {subject}</h2>
                <p>From: {from} &lt;{address}&gt;</p>
                <p>Date: {time}</p> 
            </div>
        )
    }
};

export default EmailSidebar;
