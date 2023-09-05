---
title: "How to deploy Mern Stack app"
date: "2023-05-16"
author: "ozan ocak"
tags: ["Render", "Netlify", "git", "MERN"]
subtitle: "Deploying full stack app with Render and Netlify ...."
---

To deploy a Node.js app on Render, you can follow these general steps:

1-Sign up for a Render account at https://render.com/ and create a new web service.
2-Choose "Custom" as your deployment method.
3-Select "Node.js" as your runtime and specify the version of Node.js you are using.
4-Choose how you want to deploy your code:
. You can connect to a GitHub, GitLab, or Bitbucket repository and Render will automatically build and deploy your app when you . push changes to the repository.
. Alternatively, you can upload your code directly to Render.
5-Configure any necessary environment variables or build commands for your app.
6-Choose a scaling plan for your app and deploy it.
Render will then build and deploy your app, and you can view the logs and metrics for your app in the Render dashboard.

Here's a more detailed guide on how to deploy a Node.js app on Render: https://render.com/docs/deploy-nodejs

After naming the project, choose the closest server region , choose root directorey as the backend directory in the project
e.x/ server, backend etc.

- build command is npm install
- start command is npx nodemon
- then we can create web service
- we also need to go environment for entering env values such as mongoURI

- our backend will be on live,we need copy it and replace it with http://localhost:3000 within the project

### Deploying client on Netlify

- Client side should be in another git repository for easy deployment
- we all need to push client site to new git repo and add the project in netlify
