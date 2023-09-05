---
title: "Understanding Api 01"
date: "2023-05-11"
author: "ozan ocak"
tags: ["Api", "Node.js", "React", "express"]
subtitle: "How to integrate Json Server in your React app for development server ...."
---

API stands for Application Programming Interface. An API is a set of protocols, routines, and tools for building software applications. APIs allow different software applications to communicate with each other and share data or functionality.

In general, an API is a way for different software components to interact with each other in a standardized way. By defining a set of rules and protocols, APIs enable developers to create software that can communicate with other software without needing to know the details of how that software works.

APIs can be used in a variety of ways, such as:

- Retrieving data from a database or other source
- Sending data to a remote server for processing
- Integrating with third-party services and platforms
- Controlling or manipulating hardware devices
- And much more

APIs can be accessed through a variety of methods, such as web-based protocols like HTTP or REST, or through more specialized protocols like SOAP or GraphQL.

Many modern software applications provide APIs to allow developers to build custom integrations or extend the functionality of their software. APIs have become a critical part of the modern software development landscape and are used extensively in industries such as finance, e-commerce, and social media, among others.

## Programming Api

```console
yarn add cors dotenv express jsonwebtoken mongoose morgan
yarn add -D nodemon
```

We need create a server.js file as below.

```javascript
const express = require("express");

const app = express();

app.get("/todos", (req, res) => {
  res.send("hello world!");
});

app.listen(5000);
```

Then we need update acript within package.json as below

```json
   "dev":"nodemon server.js"
```

Finally we run the server with `yarn dev` then with `curl http://`localhost:5000/todos`
will return as respond from server "hello world!" in the terminal
