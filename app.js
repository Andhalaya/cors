const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/character/:name', async (req, res) => {
    const name = req.params.name;
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;

    try {
        const response = await axios.get(url);
        const {name, status, species, gender, origin, image} = response.data.results[0];

        res.json({ name, status, species, gender, origin: origin.name, image});
    } catch (error) {
        res.status(404).json({ error: 'personaje no encontrado' });
    }
});

app.listen(3002, () => {
    console.log('express esta escuchando en el puerto http://localhost:3002/character');
});
