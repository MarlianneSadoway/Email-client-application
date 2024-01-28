/**
 * This is the component for the list of emails in the Email Sidebar View. 
 */
import React from "react";
import EmailSidebar from "../emailsidebar/emailsidebar.component";

const EmailSidebarList = ({ emails, selectedEmail, modifyBodyToEmail }) => (
  // Each email is mapped to an EmailSidebar component 
  <div className="emaillist">
    {emails.map((email) => {
      return (
        // onClick will change the body (to the right of the sidebar) to the email that is clicked on 
        // by calling modifyBodyToEmail 
        <div key={email.id} onClick={() => modifyBodyToEmail(email)}>
          <EmailSidebar
            key={email.id}
            email={email}
            active={selectedEmail && email === selectedEmail} 
          />
        </div>
      );
    })}
  </div>
);

export default EmailSidebarList;
