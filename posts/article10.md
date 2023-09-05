---
title: "JSON-Server for React Development"
date: "2023-05-10"
author: "ozan ocak"
tags: ["CRUD", "JSON Server", "React"]
subtitle: "How to integrate Json Server in your React app for development server ...."
---

To integrate Json Server in your React app for development server is the easiest approach for front end development.

1- Install the json-server package:

```bash
npm install json-server
```

2- Create a db.json file in the root directory of your project, and add some data to it. For example:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product 1",
      "price": 19.99
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 29.99
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 39.99
    }
  ]
}
```

3- Create a new script in your package.json file to start the JSON server:

```json
"scripts": {
  "start": "react-scripts start",
  "json-server": "json-server --watch db.json --port 3001"
},
```

4- In this example, we're using port 3001 for the JSON server, so it doesn't conflict with the default port used by the React app.

Start the JSON server:

```bash
npm run json-server
```

This will start the JSON server and make the data in your db.json file available at http://localhost:3001.

In your React app, you can fetch the data from the JSON server using the fetch() API or a library like axios. Here's an example of how you can fetch the products data from the JSON server in a React component:

```javascript
import { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

In this example, we're using the useState() and useEffect() hooks to fetch the data from the JSON server and store it in the products state variable. We're then rendering the list of products using the map() method.
