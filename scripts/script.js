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

  for (let i = 1; i < etapa.numeros; i++) {
    if (i === 1) {
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
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });

  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}`;

    let fotosHtml = "";
    for (let i in candidato.fotos) {
      fotosHtml += `<div class="d-1-right">
          <div class="image">
            <img src=${candidato.fotos[i].url} />
            ${candidato.fotos[i].legenda}
          </div>`;
    }
    lateral.innerHTML = fotosHtml;
  } else {
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    descricao.innerHTML = `<div class="avisoGrande pisca">VOTO NULO</div>`;
  }

  console.log("Candidato: " + candidato);
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
