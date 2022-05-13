let seuVotoPara = document.querySelector(".d-1-left span");
let cargo = document.querySelector(".cargo span");
let descricao = document.querySelector(".dados");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".num");

let etapaAtual = 0;
let numero = "";

function comecarEtapa() {
  let etapa = etapas[etapaAtual];
  let numeroHtml = "";

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += `<div class="numero pisca"></div>`;
    }
    numeroHtml += `<div class="numero"></div>`;
  }

  seuVotoPara.style.display = "none";
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML = "";
  numeros.innerHTML = numeroHtml;
}

function updateInterface() {
  alert("FIM!");
}

function clicou(n) {
  let elementNum = document.querySelector(".numero.pisca");
  if (elementNum !== null) {
    elementNum.innerHTML = n;
    numero = `${numero}${n}`;

    elementNum.classList.remove("pisca");
    if (elementNum.nextElementSibling !== null) {
      elementNum.nextElementSibling.classList.add("pisca");
    } else {
      updateInterface();
    }
  }
}

document.querySelector(".btnBranco").addEventListener("click", () => {
  alert("Clicou Branco");
});
document.querySelector(".btnCorrige").addEventListener("click", () => {
  alert("Clicou Corrige");
});
document.querySelector(".btnConfirma").addEventListener("click", () => {
  alert("Clicou Confirma");
});

comecarEtapa();
