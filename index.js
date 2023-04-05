const rateLimit = (maxRequests, timeWindow) => {
  const requests = new Map();
  return (req, res, next) => {
     const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
     let ip = ipAddress.split(',')[0].trim();
    const now = Date.now();
    if (!requests.has(ip)) {
      requests.set(ip, [{ timestamp: now, count: 1 }]);
      return next();
    }
    const userRequests = requests.get(ip);
    const windowStart = now - timeWindow;
    const recentRequests = userRequests.filter(req => req.timestamp > windowStart);
    const requestCount = recentRequests.reduce((acc, req) => acc + req.count, 0);
    if (requestCount >= maxRequests) {
      return res.status(429).send('Too Many Requests');
    }
    userRequests.push({ timestamp: now, count: 1 });
    requests.set(ip, userRequests);
    next();
  };
};


module.exports=rateLimit



















