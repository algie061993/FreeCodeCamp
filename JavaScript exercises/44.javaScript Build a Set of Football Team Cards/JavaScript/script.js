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

selectPosition.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;
  const playerCards = playerCardsContainer.children;

  if (selectedPosition === "all") {
    for (let i = 0; i < playerCards.length; i++) {
      playerCards[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < playerCards.length; i++) {
      const playerCard = playerCards[i];
      const playerPosition = playerCard.children[1].textContent
        .split(": ")[1]
        .trim();
      if (playerPosition.toLowerCase().includes(selectedPosition)) {
        playerCard.style.display = "block";
      } else {
        playerCard.style.display = "none";
      }
    }
  }
});
