const express = require('express'); //require is a Node.js function to load modules
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hoi zämme! Leider hets hütt nid klappet.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
