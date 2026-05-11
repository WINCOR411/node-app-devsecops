const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello DevSecOps M2 !',
    app: 'node-app-secure',
    version: '1.0.0',
    status: 'Secure - node:18-alpine'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`node-app-secure running on port ${PORT}`);
});
