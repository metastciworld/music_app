
const express = require('express')
const { insertTrack } = require('./controller/insertTrack')
const { getTrack } = require('./controller/getTrack')
const { insertAlbum } = require('./controller/insertAlbum');
const { getAlbum } = require('./controller/getAlbum');
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/insert', insertTrack);
app.post('/insertalbum',insertAlbum);
app.get('/getalbum' , getAlbum);
app.get('/gettrack', getTrack)

app.listen(port, () => console.log(`Music App Server listening on port ${port}!`))