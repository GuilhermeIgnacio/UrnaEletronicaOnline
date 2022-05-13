let seuVotoPara = document.querySelector(".d-1-left span");
let cargo = document.querySelector(".cargo span");
let descricao = document.querySelector(".dados");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".num");

let etapaAtual = 0;
let numero = "";
let branco = false;

function comecarEtapa() {
  let etapa = etapas[etapaAtual];
  let numeroHtml = "";
  numero = "";
  branco = false;

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
      if (candidato.fotos[i].url.small) {
        fotosHtml += `<div class="d-1-right">
            <div class="image small">
              <img src=${candidato.fotos[i].url} />
              ${candidato.fotos[i].legenda}
            </div>`;
      } else {
        fotosHtml += `<div class="d-1-right">
          <div class="image">
            <img src=${candidato.fotos[i].url} />
            ${candidato.fotos[i].legenda}
          </div>`;
      }
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
  if (numero === "") {
    branco = true;
    seuVotoPara.style.display = "block";
    aviso.style.display = "block";
    numeros.innerHTML = "";
    descricao.innerHTML = `<div class="avisoGrande pisca">VOTO EM BRANCO</div>`;
  } else {
    alert(
      "Para votar em BRANCO o campo de voto deve estar vazio. Aperte CORRIGE para apagar o campo de voto."
    );
  }
});
document.querySelector(".btnCorrige").addEventListener("click", () => {
  comecarEtapa();
});
document.querySelector(".btnConfirma").addEventListener("click", () => {
  let etapa = etapas[etapaAtual];
  let votoConfirmado = false;

  if (branco === true) {
    votoConfirmado = true;
    console.log("Confirmando como BRANCO");
  } else if (numero.length === etapa.numeros) {
    votoConfirmado = true;
    console.log("Confirmando como " + numero);
  }

  if (votoConfirmado) {
    etapaAtual++;

    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa();
    } else {
      document.querySelector(
        ".tela"
      ).innerHTML = `<div class="avisoGigante pisca">FIM!</div>`;
    }
  }
});

comecarEtapa();
