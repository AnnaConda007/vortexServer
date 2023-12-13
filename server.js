const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000; 
app.use(cors());


app.get('/get-events', async (req, res) => {
  try {
    
    const response = await axios.get('https://events.vortex.foundation/events');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).send('Ошибка при получении данных с удаленного сервера');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
