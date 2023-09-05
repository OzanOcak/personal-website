---
title: "Local Storage custom React hook"
date: "2023-05-09"
author: "ozan ocak"
tags: ["Git", ".env"]
subtitle: "Seperating data from logic and user interface of the app by using custom hook ...."
---

In a React app, you can use the browser's Local Storage API to store data locally on the user's device. Here's a basic example of how you can use Local Storage in a React app:

First, import the Local Storage API at the top of your component:

```javascript
import { useState, useEffect } from "react";
```

Then, create a state variable to hold the data you want to store:

```javascript
const [data, setData] = useState(null);
```

Next, use the useEffect hook to save the data to Local Storage whenever it changes:

```javascript
useEffect(() => {
  localStorage.setItem("myData", JSON.stringify(data));
}, [data]);
```

In this example, we're setting the myData key in Local Storage to the JSON stringified value of data. We're also adding data as a dependency to the useEffect hook, which means the hook will be called whenever data changes.

Finally, you can retrieve the data from Local Storage when your component mounts:

```javascript
useEffect(() => {
  const storedData = localStorage.getItem("myData");
  setData(JSON.parse(storedData));
}, []);
```

In this example, we're retrieving the myData key from Local Storage, parsing the JSON string into an object, and setting the data state variable to that object. We're also passing an empty array as the second argument to the useEffect hook, which means the hook will only be called once, when the component mounts.

```javascript
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todo_list";

export default function useLocalStorage() {
  const [posts, setPosts] = useState([]);

  function loadSavedposts() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }

  function setPostsAndSave(newposts) {
    setPosts(newposts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newposts));
  }

  useEffect(() => {
    loadSavedposts();
  }, []);

  return { posts, setPostsAndSave };
}
```

We can also move the logic into custom react hook to simplify the code then call the custom hook.
By accessing the posts, we should also be able to seperate data out of UI.

```javascript
const { posts, setPostsAndSave } = useLocalStorage() || [];
```
