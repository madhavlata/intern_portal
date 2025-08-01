const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/intern", (req, res) => {
  res.json({
    name: "Madhav Lata",
    referral_code: "madhav2025",
    total_donations: 6500,
    rewards: ["T-Shirt", "Certificate", "Amazon Voucher"],
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Aarya", donations: 7500 },
    { name: "Madhav Lata", donations: 6500 },
    { name: "Ravi", donations: 5000 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
