import React from "react";
import { useTranslation } from "react-i18next";

const Leaderboard = () => {
  const { t } = useTranslation();

  // Sample data for usernames and points
  const leaderboardData = [
    { username: "User1", points: 100 },
    { username: "User2", points: 90 },
    { username: "User3", points: 85 },
    { username: "User4", points: 80 },
    { username: "User5", points: 75 },
  ];

  return (
    <div>
      <h2>{t("leaderboard.title")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("leaderboard.username")}</th>
            <th>{t("leaderboard.points")}</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each row of the leaderboard */}
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.username}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
