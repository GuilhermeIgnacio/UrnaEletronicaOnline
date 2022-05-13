# Urna Eletrônica Online

<br>

![GithubRepoSize](https://img.shields.io/badge/REPO%20SIZE-2.52%20MB-blue?style=flat-square)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c5e512f9-d99c-409c-9f23-6358959d4205/deploy-status)](https://urna-eletronica-online.netlify.app/)

<br>

<img src="./assets/preview.gif">

<br>

## Descrição e AVISO!

<br>

> Projeto de uma urna eletrônica online, este projeto não é oficial e nem tenta se passar como tal, este projeto não foi autorizado pelo TSE, este projeto foi feito apenas para fins educativos, caso queira acessar o simulador oficial basta clicar [Aqui!](https://www.tse.jus.br/eleicoes/urna-eletronica/simulacao-de-votacao)

<br>

## Feito Com:

<br>

[![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/pt-br/windows/get-windows-10)
[![IDE](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Como Adicionar Novos Candidatos

<br>

> 1: Acesse o arquivo "etapas.js"

> <br>

> 2: Siga o seguinte modelo:

> <br>

```
{
    titulo: "", // CARGO, exemplo: Vereador
    numeros: , // Quantidade de Números para selecionar os candidatos na hora da votação
    candidatos: [
      {
        numero: "", // Número do Candidato
        nome: "", // Nome do Candidato
        partido: "", // Partido do Candidato
        fotos: [{ url: "// URL da foto do candidato", legenda: "// Legenda abaixo da foto do candidato" }],
      },
    ],
  },
```

## Como acessar

<br>
> Para acessar de forma online este projeto, basta clicar <a href="https://urna-eletronica-online.netlify.app/">Aqui</a>
