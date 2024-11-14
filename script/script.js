const cardData = [
  {
    image:
      "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24681810/ss_c5538c33897d922241b73d5dd672856093efeda4.jpg?quality=90&strip=all&crop=0,0,100,100",
    title: "01",
    subtitle: "Controle o tempo",
    description:
      "Use o Revo-Z do Ekko para voltar no tempo. Depois, com conhecimento do futuro, adapte a abordagem diante de qualquer desafio e surpreenda os inimigos. O combate fluido e dinâmico recompensa um bom posicionamento e reflexos precisos",
  },
  {
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1276800/ss_de987b07983c390b86771b1836789c04bd796225.1920x1080.jpg?t=1707178625",
    title: "02",
    subtitle: "EXPLORE ZAUN",
    description:
      "Corra, salte e deslize pelas ruas de Zaun. Interaja com Campeões, confronte inimigos e descubra aspectos da Subferia nunca antes vistos.",
  },
  {
    image:
      "https://game-experience.it/wp-content/uploads/2023/05/convergence-3.jpg",
    title: "03",
    subtitle: "BATALHE CONTRA CAMPEÕES",
    description:
      "Encontre Campeões de League of Legends como nunca viu antes. Habilite novas habilidades e enfrente rivais em uma série de batalhas explosivas para descobrir quem está do seu lado e quem são seus inimigos.",
  },
];

let indexAtual = 0;

function atualizarCardData(index) {
  document.getElementById("card-image").src = cardData[index].image;
  document.getElementById("card-title").textContent = cardData[index].title;
  document.getElementById("card-subtitle").textContent =
    cardData[index].subtitle;
  document.getElementById("card-description").textContent =
    cardData[index].description;
}

function nextData() {
  indexAtual = (indexAtual + 1) % cardData.length;
  atualizarCardData(indexAtual);
}

function backData() {
  indexAtual = (indexAtual - 1 + cardData.length) % cardData.length;
  atualizarCardData(indexAtual);
}

atualizarCardData(indexAtual);
