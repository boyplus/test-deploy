const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.get('/api/test', (req, res) => {
    res.send({ msg: 'ok loeiii' });
});


app.use(express.static('client/build'));
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
