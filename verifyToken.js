const jwt = require("jsonwebtoken");
const fs = require("fs");

const SECRET_KEY = "your_secret_key";

// Read token from file
const token = fs.readFileSync("token.txt", "utf8");

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("✅ Decoded Payload:", decoded);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.log("❌ Token has expired!");
    } else {
      console.log("❌ Invalid Token:", error.message);
    }
  }
};

verifyToken(token);
console.log("Received Token:", token);
