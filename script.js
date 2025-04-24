const encrypt = (payload, secret) => {
  const encrypt = require("./encrypt");

  // Define the payload (information you want to embed in the token)
  const payload = {
    username: "testUser",
    role: "admin",
  };

  // Define your secret key (make sure to keep it private!)
  const secret = "your_secret_key";

  // Encrypt the payload and generate the token
  const token = encrypt(payload, secret);

  // Print the generated token to the console
  if (token) {
    console.log("Generated Token:", token);
  } else {
    console.log("Token generation failed!");
  }
};

module.exports = encrypt;
