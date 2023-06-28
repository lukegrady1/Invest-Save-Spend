// Import necessary modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Database connection URL
const url = 'mongodb://localhost:27017';
// Database name
const dbName = 'mydatabase';

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for creating a new account
app.post('/create-account', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Connect to MongoDB
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return res.status(500).send('Error connecting to the database.');
    }

    // Access the database
    const db = client.db(dbName);

    // Create a new user document
    const newUser = { username, password };

    // Insert the user document into the "users" collection
    db.collection('users').insertOne(newUser, (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Error creating the user account.');
      }

      console.log('User created:', result.ops[0]);

      // Redirect to the sign-in page after successful account creation
      res.redirect('/Sign-In/sign-in.html');
    });

    // Close the database connection
    client.close();
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
