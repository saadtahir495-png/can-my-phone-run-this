const games = [
  {
    name: "Genshin Impact",
    level: "high",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_cover.jpg"
  },
  {
    name: "Rhythm Hive",
    level: "mid",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Rhythm_Hive_app_icon.png"
  },
  {
    name: "Among Us",
    level: "low",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg"
  },
  {
    name: "Roblox",
    level: "mid",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Roblox_Logo_2022.svg"
  },
  {
    name: "Dream League Soccer 2026",
    level: "mid",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dream_League_Soccer_2023_logo.png"
  },
  {
    name: "PUBG Mobile",
    level: "mid",
    img: "https://upload.wikimedia.org/wikipedia/en/4/44/PUBG_Mobile_Logo.png"
  },
  {
    name: "Free Fire",
    level: "low",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6c/Garena_Free_Fire_logo.png"
  }
];

function searchGame() {
  const phoneLevel = document.getElementById("phone").value;
  const search = document.getElementById("search").value.toLowerCase();
  const result = document.getElementById("result");

  if (!phoneLevel || !search) {
    result.innerHTML = "<p>Please select your phone and a game.</p>";
    return;
  }

  const game = games.find(g =>
    g.name.toLowerCase().includes(search)
  );

  if (!game) {
    result.innerHTML = "<p>Game not found.</p>";
    return;
  }

  let text = "";
  let cls = "";

  if (phoneLevel === "high") {
    text = "Your phone can run this game smoothly (Good)";
    cls = "good";
  } else if (phoneLevel === game.level) {
    text = "Playable on low or medium graphics";
    cls = "low";
  } else if (phoneLevel === "mid" && game.level === "low") {
    text = "Runs well on low graphics";
    cls = "low";
  } else {
    text = "Game may run with lag";
    cls = "lag";
  }

  result.innerHTML = `
    <div class="game-card">
      <img src="${game.img}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p class="${cls}">${text}</p>
    </div>
  `;
}