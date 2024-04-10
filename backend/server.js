
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const uri = "mongodb+srv://shakyanamrata18:F99mX13zLbjX4p84@dribble.sulhguh.mongodb.net/?retryWrites=true&w=majority&appName=Dribble";
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
    name:String,
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Route for signup
app.post('/signup', (req, res) => {
  const { name,username, email, password } = req.body;

  // Check if username, email, and password are provided
  if (!name||!username || !email || !password) {
    return res.status(400).json({ message: "Username, email, and password are required." });
  }

  // Check if user with the same email already exists
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists" });
    }

    // Create a new user
    const newUser = new User({
        name,
      username,
      email,
      password
    });

    // Save the user to the database
    newUser.save(err => {
      if (err) {
        return res.status(500).json({ message: "Error saving user" });
      }
      return res.status(201).json({ message: "User created successfully" });
    });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))