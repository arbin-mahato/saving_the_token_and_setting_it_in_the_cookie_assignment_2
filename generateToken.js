const jwt = require("jsonwebtoken");

// Define a payload (information you want to include in the token)
const payload = {
  username: "testUser",
  role: "admin",
};

// Define your JWT secret key (keep this secret!)
const SECRET_KEY = "your_secret_key";

// Set the token's expiration time (in seconds)
const expiresIn = "1h"; // Token will expire in 1 hour

// Generate JWT with an expiration time
const token = jwt.sign(payload, SECRET_KEY, { expiresIn });

console.log("Generated Token:", token);
