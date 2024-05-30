// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the public folder
app.use(express.static('public'));

// Use the comments folder
app.use(express.static('comments'));

// Get the comments
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments/index.html');
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});