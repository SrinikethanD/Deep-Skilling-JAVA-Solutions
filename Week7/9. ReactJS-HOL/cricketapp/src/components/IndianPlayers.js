import React from 'react';

const IndianPlayers = () => {
  const T20Players = ['Virat', 'Rohit', 'Dhoni', 'Gill'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Iyer'];

  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];
  
  const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>List Of Indian Players Merged</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;