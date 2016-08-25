const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();
const port = process.env.PORT || 8000;

app.set('views', './views');
app.set('view engine', 'pug');

app.post('/file-upload', upload.single('file'), (req, res) => {
  res.status(200).send(`{"size": ${req.file.size}}`);
});

app.use('*', (req, res) => {
  res.render('index');
});

app.listen(port);
