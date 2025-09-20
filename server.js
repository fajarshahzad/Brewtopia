const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // For HTML, CSS, JS files

// API endpoint to save contact form
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

const fs = require("fs");
const path = require("path");

// Define folder and file paths
const folderPath = path.join(__dirname, "data");
const filePath = path.join(folderPath, "customer_service.json");

// Step 1: Ensure folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log("Folder 'data' created.");
}

// Step 2: Check if file exists
let existingData = [];
if (!fs.existsSync(filePath)) {
  // If file doesn't exist, create an empty array
  existingData = [];
} else {
  // If file exists, read existing data
  existingData = JSON.parse(fs.readFileSync(filePath, "utf8"));
}


  // Read existing data if file exists
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    messages = data ? JSON.parse(data) : [];
  }

  // Add new message
  messages.push({ name, email, message, date: new Date().toISOString() });

  // Write back to JSON file
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  res.json({ success: true, message: "Message saved successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
