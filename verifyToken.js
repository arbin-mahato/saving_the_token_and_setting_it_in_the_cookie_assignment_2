const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_secret_key";

const token = "your_generated_token_here";

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded Payload:", decoded);
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
