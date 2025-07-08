// We import the necessary modules
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Initialize the Express application
const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to check the weather by city
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;

  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Could not get weather' });
  }
});

// Start the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
