import React from "react";
import { useTranslation } from "react-i18next";
import "./Leaderboard.css"; // Import the CSS file

const Leaderboard = () => {
  const { t } = useTranslation();

  // Team data
  const team = [
    {
      rank: 1,
      name: "Lewis Hamilton",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png",
      kudos: 36,
    },
    {
      rank: 2,
      name: "Kimi Raikkonen",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col-retina/image.png",
      kudos: 31,
    },
    {
      rank: 3,
      name: "Sebastian Vettel",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png",
      kudos: 24,
    },
    {
      rank: 4,
      name: "Max Verstappen",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
      kudos: 20,
    },
    {
      rank: 5,
      name: "Valtteri Bottas",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col-retina/image.png",
      kudos: 18,
    },
    {
      rank: 6,
      name: "Daniel Ricciardo",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png",
      kudos: 15,
    },
    {
      rank: 7,
      name: "Charles Leclerc",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png",
      kudos: 12,
    },
    {
      rank: 8,
      name: "Carlos Sainz",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png",
      kudos: 10,
    },
    {
      rank: 9,
      name: "Lando Norris",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png",
      kudos: 8,
    },
    {
      rank: 10,
      name: "Fernando Alonso",
      img: "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png",
      kudos: 6,
    },
    // Add more team members as needed
  ];

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
          {team.map((member, index) => (
            <tr key={index}>
              <td>{member.rank}</td>
              <td>
                <div className="c-media">
                  <img
                    className="c-avatar c-media__img"
                    src={member.img}
                    alt={member.name}
                  />
                  <div className="c-media__content">
                    <div className="c-media__title">{member.name}</div>
                  </div>
                </div>
              </td>
              <td>{member.kudos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
