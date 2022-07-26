// 152. Creating the chat app project - rc95 26/07/2022 01:04
const path = require('path');
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`)
})

//hasta aqui llegué.. 26/07/2022 01:30