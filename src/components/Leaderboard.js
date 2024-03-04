import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Leaderboard.css"; // Import the CSS file

const Leaderboard = () => {
  const { t } = useTranslation();
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [tournamentResults, setTournamentResults] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch("https://four2trans-backend.onrender.com/leaderboard/");
        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    const fetchTournamentResults = async () => {
      try {
        const response = await fetch("https://four2trans-backend.onrender.com/tournaments/");
        if (!response.ok) {
          throw new Error("Failed to fetch tournament results");
        }
        const data = await response.json();
        setTournamentResults(data);
      } catch (error) {
        console.error("Error fetching tournament results:", error);
      }
    };

    fetchLeaderboardData();
    fetchTournamentResults();
  }, []);

  // Function to generate a random unique color
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    
    <div className="l-wrapper">
      <h2>{t("leaderboard.title")}</h2>
      <table className="c-table">
      <thead>
          <tr>
            <th>{t("leaderboard.rank")}</th>
            <th>{t("leaderboard.player")}</th>
            <th>{t("leaderboard.kudos")}</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((member, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="c-media">
                  <div
                    className="c-avatar c-media__img"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {member.img ? (
                      <img src={member.img} alt={member.username} />
                    ) : (
                      <div className="default-profile-pic"></div>
                    )}
                  </div>
                  <div className="c-media__content">
                    <div className="c-media__title">{member.username}</div>
                  </div>
                </div>
              </td>
              <td>{member.score || 0}</td>{" "}
              {/* Display 0 if score is empty or 0 */}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{t("leaderboard.tournamentResultsTitle")}</h2>
      <div className="tournament-results">
        {tournamentResults.map((tournament, index) => (
          <div key={index} className="tournament">
            <h3>{tournament.name}</h3>
            <table className="c-table">
              <thead>
                <tr>
                  <th>{t("leaderboard.player")}</th>
                  <th>{t("leaderboard.kudos")}</th>
                </tr>
              </thead>
              <tbody>
                {tournament.results.map((result, resultIndex) => (
                  <tr key={resultIndex}>
                    <td>{result.username}</td>
                    <td>{result.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
