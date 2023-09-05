---
title: "Sending e-mail with Node Mailer"
date: "2023-05-10"
author: "ozan ocak"
tags: ["Node.JS", "React"]
subtitle: "Hov to integrate NodeMailer with your React contact form...."
---

To integrate NodeMailer with your React contact form, you will need to create a Node.js server that listens for form submissions and sends emails using NodeMailer. Here are the general steps you can follow:

Install the necessary packages:

Install NodeMailer: npm install nodemailer
Install CORS (if your React app is running on a different domain): npm install cors
Install the Body Parser middleware: npm install body-parser
Create a Node.js server file (e.g. server.js) that listens for form submissions:

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Create a new Express app
const app = express();

// Configure CORS (if needed)
app.use(cors());

// Parse JSON-encoded bodies using the Body Parser middleware
app.use(bodyParser.json());

// Handle POST requests to /contact
app.post("/contact", (req, res) => {
  // Create a transporter object using the SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-gmail-username",
      pass: "your-gmail-password",
    },
  });

  // Get the form data from the request body
  const { name, email, message } = req.body;

  // Create a mailOptions object
  const mailOptions = {
    from: "your-gmail-username",
    to: "recipient-email-address",
    subject: "New contact form submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
```

In your React component, add an onSubmit handler to the form that sends a POST request to your Node.js server:

```javascript
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the /contact endpoint on your Node.js server
    fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then(() => {
        alert("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("Error sending email");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
```

Note that this is just a basic example, and you will need to customize the code to fit your specific needs. Additionally, you'll need to update the host, port, auth, and from properties of the transporter and mailOptions objects to match your email provider and credentials.
