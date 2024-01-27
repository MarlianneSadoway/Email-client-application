import './App.css';
import axios from 'axios';
import EmailBody from './components/emailbody/emailbody.component';
import EmailSidebarList from './components/emailsidebarlist/emailsidebarlist.component';
import React, { useState, useEffect } from "react";

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios(
        'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json',
      );
      setEmails(response.data);
    };
    fetchEmails();
  }, []);
    
  const modifyBodyToEmail = (selectedEmail) => {
    console.log(selectedEmail);
    setSelectedEmail(selectedEmail);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h1>Emails</h1>
        <EmailSidebarList 
          emails={emails} 
          modifyBodyToEmail={modifyBodyToEmail}
        />
      </div>
      <EmailBody email={selectedEmail} />
    </div>
  );
}

export default App;
