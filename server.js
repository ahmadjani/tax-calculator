const express = require('express');
const app = express();
const port = 8080;

// Yeh line zaroori hai: Current folder ki saari files (CSS, HTML) serve karega
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});