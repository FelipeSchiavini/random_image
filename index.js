const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const server = express();

server.use(cors());

server.get("/", (req, res) => {
  const imagesPath = './images';

  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      return res.status(500).send('Erro ao ler a pasta de imagens');
    }

    const randomImage = files[Math.floor(Math.random() * files.length)];

    const imagePath = path.join(__dirname, imagesPath, randomImage); // Use __dirname here

    res.sendFile(imagePath);
  });
});

server.listen(5000, () => console.log('Listening on port 5000'));
