const jwt = require("jsonwebtoken");
const fs = require("fs");

const payload = {
  username: "testUser",
  role: "admin",
};

const SECRET_KEY = "your_secret_key";
const expiresIn = "1h";

const token = jwt.sign(payload, SECRET_KEY, { expiresIn });

console.log("Generated Token:", token);

// Save to file
fs.writeFileSync("token.txt", token);
console.log("Token saved to token.txt");
