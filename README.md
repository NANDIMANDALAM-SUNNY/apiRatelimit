# apiRatelimit

```
$ npm i api-rate-limit --save
```

`
const rateLimit = require('api-rate-limit')
const express = require('express');

// Create an Express app
const app = express();

// creating route
  app.get('/', rateLimit(5, 60000),(req, res) => {
   res.send("Hello World")
  });
  
  
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  
`