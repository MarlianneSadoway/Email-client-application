/**
 * This is a React Email Client Application created for learning purposes. 
 * The application has a left sidebar with the list of emails and when an email
 * is clicked on it displays on the right side of the sidebar (the body). 
 * Emails in the sidebar with a white background are read, emails in the sidebar with a 
 * grey background are unread, and emails in the sidebar with a blue background are 
 * active (displayed on the right in the body). 
 */
import './App.css';
import axios from 'axios';
import EmailBody from './components/emailbody/emailbody.component';
import EmailSidebarList from './components/emailsidebarlist/emailsidebarlist.component';
import React, { useState, useEffect } from "react";

function App() {
  // the list of all emails 
  const [emails, setEmails] = useState([]); 
  // the selectedEmail is the active email that was selected/clicked on, and therefore displayed on the right (in the body)
  const [selectedEmail, setSelectedEmail] = useState(null); // default is null 

  useEffect(() => {
    const fetchEmails = async () => {
      // Get the email data 
      const response = await axios(
        'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json',
      );
      // Set the emails to the retrieved data 
      setEmails(response.data);
    };
    fetchEmails();
  }, []);
    
  // Changes the selected email displayed in the body to the email that was clicked on in the sidebar 
  const modifyBodyToEmail = (selectedEmail) => {
    setSelectedEmail(selectedEmail); // sets the new state 
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h1>Your Emails</h1>
        <EmailSidebarList 
          emails={emails} 
          selectedEmail={selectedEmail}
          modifyBodyToEmail={modifyBodyToEmail}
        />
      </div>
      <div className="body">
        <EmailBody email={selectedEmail} /> 
      </div>
    </div>
  );
}

export default App;
