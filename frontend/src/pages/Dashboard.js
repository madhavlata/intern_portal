import React, { useEffect, useState } from "react";

function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("https://intern-portal-kz4p.onrender.com/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data));

    fetch("https://intern-portal-kz4p.onrender.com/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setLeaderboard(data));
  }, []);

  return (
    <div className="App">
      <h1>Intern Dashboard</h1>
      {!intern ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {intern.name}
          </p>
          <p>
            <strong>Referral Code:</strong> {intern.referral_code}
          </p>
          <p>
            <strong>Total Donations:</strong> ₹{intern.total_donations}
          </p>

          <h2>Rewards / Unlockables</h2>
          <ul>
            {intern.rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </>
      )}

      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map((entry, index) => (
          <li key={index}>
            {entry.name} — ₹{entry.donations}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Dashboard;
