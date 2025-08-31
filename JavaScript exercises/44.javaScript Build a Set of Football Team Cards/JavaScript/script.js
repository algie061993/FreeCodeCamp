// JavaScript exercises/44.javaScript Build a Set of Football Team Cards/JavaScript/script.js

const footballTeam = {
  team: "Manchester United",
  year: 2022,
  headCoach: "Erik ten Hag",
  players: [
    { name: "Cristiano Ronaldo", position: "forward", isCaptain: true },
    { name: "Marcus Rashford", position: "forward", isCaptain: false },
    { name: "Paul Pogba", position: "midfielder", isCaptain: false },
    { name: "Nemanja Matic", position: "midfielder", isCaptain: false },
    { name: "Harry Maguire", position: "defender", isCaptain: false },
    { name: "David de Gea", position: "goalkeeper", isCaptain: false },
  ],
};

const teamCoach = document.getElementById("head-coach");
const teamName = document.getElementById("team");
const teamYear = document.getElementById("year");

const selectPosition = document.getElementById("players");

const playerCardsContainer = document.getElementById("player-cards");

teamCoach.textContent = footballTeam.headCoach;
teamName.textContent = footballTeam.team;
teamYear.textContent = footballTeam.year;

// add an event listener to the dropdown menu
selectPosition.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;

  // filter the players by position
  const filteredPlayers = footballTeam.players.filter((player) => {
    if (selectedPosition === "all") {
      return true;
    }
    return player.position === selectedPosition;
  });
  debugger;
  // update the player cards container
  playerCardsContainer.innerHTML = "";
  filteredPlayers.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    const playerName = document.createElement("h2");
    playerName.textContent = player.name;
    if (player.isCaptain) {
      playerName.textContent += " (Captain)";
    }
    playerCard.appendChild(playerName);

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;
    playerCard.appendChild(playerPosition);

    playerCardsContainer.appendChild(playerCard);
  });
});

// initially show all players
footballTeam.players.forEach((player) => {
  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card");

  const playerName = document.createElement("h2");
  playerName.textContent = player.name;
  if (player.isCaptain) {
    playerName.textContent += " (Captain)";
  }
  playerCard.appendChild(playerName);

  const playerPosition = document.createElement("p");
  playerPosition.textContent = `Position: ${player.position}`;
  playerCard.appendChild(playerPosition);

  playerCardsContainer.appendChild(playerCard);
});
