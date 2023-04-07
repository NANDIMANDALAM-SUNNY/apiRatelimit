
# api-rate-limit

This is a Node.js middleware that implements api rate limiting to ip addressess.Here We can specify how many requests to be sent to server for a specific api.


## API Reference
```
  npm i api-rate-limit
```

## Usage
```
const rateLimit = require('api-rate-limit')

app.get('/api', rateLimit(10, 60000), (req, res) => {
    // Your route handler logic here
    res.send('Hello, world!');
  });

```
In the above example, the rate limit is set to 10 requests per minute (time is in the format of milliseconds). If a user makes more than 10 requests within a minute, they will receive a 429 "Too Many Requests" error.

The middleware tracks the number of requests made by each IP address and ensures that the rate limit is not exceeded for any given IP address.

## Usage

#### rateLimit(maxRequests, timeWindow)
Creates a new rate limit middleware that limits the number of requests to maxRequests within the specified timeWindow.

-maxRequests: The maximum number of requests allowed within the time window.
-timeWindow: The time window in milliseconds during which the requests are counted.


## Authors

- [@nandimandalamsunny](https://github.com/NANDIMANDALAM-SUNNY)