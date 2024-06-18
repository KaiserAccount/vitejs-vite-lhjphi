// server.js

const express = require('express');
const { Firestore } = require('@google-cloud/firestore');

const app = express();
const port = 3000;

// Initialize Firestore
const firestore = new Firestore();

// Endpoint to perform the query and return the data
app.get('/doctor/:area', async (req, res) => {
  try {
    const area = req.params.area;

    // Perform the Firestore query to find the document
    const querySnapshot = await firestore
      .collection('doctors')
      .where('areas_served', 'array-contains', area)
      .orderBy('someField') // Order as needed
      .limit(1) // Take the top result
      .get();

    let doctorData;
    querySnapshot.forEach((doc) => {
      doctorData = doc.data();
    });

    // Return the data
    res.json(doctorData);
  } catch (error) {
    console.error('Error fetching doctor data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
