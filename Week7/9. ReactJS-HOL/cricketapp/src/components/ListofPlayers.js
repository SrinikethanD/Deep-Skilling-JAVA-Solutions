import react from "react";
const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 45 },
    { name: 'Dhoni', score: 90 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Jadeja', score: 75 },
    { name: 'Bumrah', score: 55 },
    { name: 'Gill', score: 95 },
    { name: 'Hardik', score: 30 },
    { name: 'Ashwin', score: 78 },
    { name: 'Sudharsan', score: 40 },
    { name: 'Natarajan', score: 18 }
  ];
 const lowScorers = players.filter(player => player.score < 70);
   return (
    <div>
      <h2>List Of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>List Of Players scored less than 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListofPlayers;
