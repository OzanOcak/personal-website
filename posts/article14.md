---
title: "MERN Stack File Structure"
date: "2023-05-15"
author: "ozan ocak"
tags: ["git", "gitignore", "env"]
subtitle: "How to structure full stack web app and where to place .env  ...."
---

## MERN Stack File Structure

In this file structure, the client folder contains the React.js front-end application, while the server folder contains the Node.js back-end application.

```console

my-app/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── ...
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Component1.js
│   │   │   ├── Component2.js
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   └── ...
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── styles/
│   │   │   └── ...
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   └── ...
├── server/
│   ├── index.js
│   ├── controllers/
│   │   ├── Controller1.js
│   │   ├── Controller2.js
│   │   └── ...
│   ├── models/
│   │   ├── Model1.js
│   │   ├── Model2.js
│   │   └── ...
│   ├── routes/
│   │   ├── api/
│   │   │   ├── Route1.js
│   │   │   ├── Route2.js
│   │   │   └── ...
│   │   ├── index.js
│   │   └── ...
│   ├── config/
│   │   ├── db.js
│   │   └── ...
│   ├── middlewares/
│   │   ├── Middleware1.js
│   │   ├── Middleware2.js
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   └── ...
├── package.json
├── package-lock.json



```

The client folder contains a public folder, which contains the static assets for the front-end application, such as HTML files, images, and stylesheets. The src folder contains the source code for the React.js application, organized into components, pages, and assets subfolders.

The server folder contains the back-end Node.js application, organized into controllers, models, routes, config, and middlewares subfolders. The controllers folder contains the business logic for the application, while the models folder contains the Mongoose schemas for the MongoDB database. The routes folder contain

We need to delete .gitignore inside in client and copy/paste it into the parent project folder, there shold be node_module in it without `/` and we can add .env generic for both client and server folders.

```console

cd client
rm -rf .git
cd ..
git init
git add .
git commit -m "initial commit"
git branch -M branch
git push -u origin master

```
