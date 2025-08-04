import React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import TextField from "@mui/material/TextField";
import EmailIcon from '@mui/icons-material/Email'; // Import icon email
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <a 
            className="button" 
            href="mailto:ratuauliamiftahhh@gmail.com" 
            rel="noreferrer"
          >
            <EmailIcon /> Send Me an Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;