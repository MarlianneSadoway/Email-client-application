import React from "react";
import EmailSidebar from '../emailsidebar/emailsidebar.component'
import "./emailsidebarlist.styles.css";

const EmailSidebarList = ({ emails, modifyBodyToEmail }) => (
    <div className="emaillist">
        {emails.map(email => (
            <div key={email.id} onClick={() => modifyBodyToEmail(email)}>
                <EmailSidebar key={email.id} email={email} />
            </div>
        ))}
    </div>
);

export default EmailSidebarList;