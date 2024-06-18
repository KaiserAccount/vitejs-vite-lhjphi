// index.js
import express from 'express';
import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import fetch from 'node-fetch';
import App from './src/App';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  const html = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en"> 
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D8XR60SXVQ"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-D8XR60SXVQ'); 
      </script>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preact SSR App</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/bundle.js" defer></script>
      </body>
    </html>
  `);
});

app.post('/fetch-doctors', async (req, res) => {
  const { zipCode } = req.body;
  // Replace with your actual API endpoint to fetch doctors
  const response = await fetch(
    `https://api.example.com/doctors?zipCode=${zipCode}`
  );
  const doctors = await response.json();
  res.json(doctors);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
