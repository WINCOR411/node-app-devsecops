const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello DevSecOps M2 !',
    app: 'node-app-vuln',
    version: '1.0.0',
    status: 'VULNERABLE - node:10'
  });
});

app.listen(PORT, () => {
  console.log(`node-app-vuln running on port ${PORT}`);
});
