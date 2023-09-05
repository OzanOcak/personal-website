---
title: "Pagination in React Application"
date: "2023-05-10"
author: "ozan ocak"
tags: ["Pagination", "JSON Server", "React"]
subtitle: "How to integrate Json Server in your React app for development server ...."
---

Pagination is a common feature in web applications that display large amounts of data. Here are the general steps you can follow to implement pagination in a React app:

Create a component to display the paginated data. This component should accept a data prop that contains the data to be displayed, as well as a perPage prop that specifies the number of items to display per page:

```javascript
import { useState } from "react";

function PaginatedList({ data, perPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const currentData = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul>
        {currentData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginatedList;
```

In this example, we're using the useState() hook to store the current page number. We're also calculating the total number of pages using the Math.ceil() function and the length of the data array and the number of items per page. We're then using the slice() method to extract the current page's data from the data array and rendering it using the map() method.

In your main component, fetch the data and pass it down to the PaginatedList component:

```javascript
import { useState, useEffect } from "react";
import PaginatedList from "./PaginatedList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <PaginatedList data={data} perPage={10} />
    </div>
  );
}

export default App;
```

In this example, we're using the useState() and useEffect() hooks to fetch the data from the server and store it in the data state variable. We're then passing the data and perPage props down to the PaginatedList component.
