// Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');

// Connection URI and Database Name
const uri = 'mongodb://localhost:27017';
const dbName = 'signin';

// Function to handle the sign-in form submission
async function handleSignIn(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Connect to MongoDB
  const client = new MongoClient(uri);
  try {
    await client.connect();

    // Access the database
    const db = client.db(dbName);

    // Access the collection
    const usersCollection = db.collection('users');

    // Find the user in the collection
    const user = await usersCollection.findOne({ username: username, password: password });

    if (user) {
      // User found, redirect to another page
      window.location.href = 'Calculate/index.html';
    } else {
      // User not found, display an error message
      alert('Invalid username or password');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Add event listener to the sign-in form
const signInForm = document.getElementById('signin-form');
signInForm.addEventListener('submit', handleSignIn);
