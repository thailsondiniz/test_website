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
  const image = document.getElementById("card-image");
  const title = document.getElementById("card-title");
  const subtitle = document.getElementById("card-subtitle");
  const description = document.getElementById("card-description");
  const slideNumbers = document.querySelectorAll(".slide-number");
  title.classList.add("rotate-out");
  subtitle.classList.add("rotate-out");
  description.classList.add("rotate-out");

  setTimeout(() => {
    image.src = cardData[index].image;
    title.textContent = cardData[index].title;
    subtitle.textContent = cardData[index].subtitle;
    description.textContent = cardData[index].description;

    title.classList.remove("rotate-out");
    subtitle.classList.remove("rotate-out");
    description.classList.remove("rotate-out");

    title.classList.add("rotate-in");
    subtitle.classList.add("rotate-in");
    description.classList.add("rotate-in");
     setTimeout(() => {
      title.classList.remove("rotate-in");
      subtitle.classList.remove("rotate-in");
      description.classList.remove("rotate-in");
    }, 300);
  }, 300);

  slideNumbers.forEach((num, i) => {
    if (i === index) {
      num.classList.add("active");
    } else {
      num.classList.remove("active");
    }
  });
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
