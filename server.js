const express = require('express');
const notesRouter = require('./api/notes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// had to console log because was having so many issues
app.use('/', (req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});

app.use('/api/notes', notesRouter);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// redirects to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});