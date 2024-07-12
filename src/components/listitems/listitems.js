import "./listitems.css";
export const ListItems = () => {
  const iplTeams = [
    {
      teamName: "CSK",
      teamCaptain: "Ruthuraj Gaikvad",
      titlewon: 5,
      wonYears: [2015, 2012, 2016, 2017],
      teamsLogo:
        "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg",
    },
    {
      teamName: "SRH",
      teamCaptain: "Cummins",
      titlewon: 1,
      wonYears: [2016],
      teamsLogo:
        "https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png",
    },
    {
      teamName: "MI",
      teamCaptain: "Hardik Pandya",
      titlewon: 5,
      wonYears: [2013, 2015, 2017, 2019, 2020],
      teamsLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcORSD20Kof9nIgVBd38rzQ4YTztXTRfF1NQ&s",
    },
    {
      teamName: "KKR",
      teamCaptain: "Shreyas Iyer",
      titlewon: 3,
      wonYears: [2012, 2014, 2024],
      teamsLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
    },
    {
      teamName: "RR",
      teamCaptain: "Sanju Samson",
      titlewon: 1,
      wonYears: [2008],
      teamsLogo:
        "https://www.cricketinprogress.com/wp-content/uploads/IPL-2021-RR-Logo.png",
    },
    {
      teamName: "GT",
      teamCaptain: "Shubman Gill",
      titlewon: 1,
      wonYears: [2022],
      teamsLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGlUl6ix-K-VU5ZiHF97AX8_y7TggfOxPzQ&s",
    },
    {
      teamName: "DC",
      teamCaptain: "Rishabh Pant",
      titlewon: 1,
      wonYears: [2009],
      teamsLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png",
    },
    {
      teamName: "RCB",
      teamCaptain: "Du plessis",
      titlewon: 0,
      wonYears: [],
      teamsLogo:
        "https://i.pinimg.com/736x/7c/d7/eb/7cd7ebcfa9f8d976b74535181907fe79.jpg",
    },
    {
      teamName: "LSG",
      teamCaptain: "KL Rahul",
      titlewon: 0,
      wonYears: [],
      teamsLogo:
        "https://static.toiimg.com/thumb/msid-89248103,width-1280,height-720,resizemode-4/89248103.jpg",
    },
    {
      teamName: "KXIP",
      teamCaptain: "Du plessis",
      titlewon: 0,
      wonYears: [],
      teamsLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDo_H7vOrQ-9ueb6BbjhXRVb2-g3946Nm36Q&s",
    },
  ];

  return (
    <>
      <table className="table">
        <tr>
          <th className="th">teamName</th>
          <th className="th">teamCaptain</th>
          <th className="th">titlewon</th>
          <th className="th">teamsLogo</th>
        </tr>

        {iplTeams.map((eachTeam) => {
          return (
            <tr>
              <td className="td">{eachTeam.teamName}</td>
              <td className="td"> {eachTeam.teamCaptain}</td>
              <td className="td">{eachTeam.titlewon}</td>
              <td className="td">
                <img src={eachTeam.teamsLogo} alt="img"></img>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
