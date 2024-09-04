const botaoPorc = document.getElementById("botaoPorc");
const botaoCE = document.getElementById("botaoCE");
const botaoC = document.getElementById("botaoC");
const botaoApagar = document.getElementById("botaoApagar");
const botao7 = document.getElementById("botao7");
const botao8 = document.getElementById("botao8");
const botao9 = document.getElementById("botao9");
const botaoMulti = document.getElementById("botaoMulti");
const botao14 = document.getElementById("botao4");
const botao15 = document.getElementById("botao5");
const botao16 = document.getElementById("botao6");
const botaoMenos = document.getElementById("botaoMenos");
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botaoSoma = document.getElementById("botaoSoma");
const botaoSinais = document.getElementById("botaoSinais");
const botao0 = document.getElementById("botao0");
const botaoVirg = document.getElementById("botaoVirg");
const botaoIgual = document.getElementById("botaoIgual");
let entrada = document.getElementById("Entrada");
let display = document.getElementById("display");

botao1.onclick = () => {
  entrada.innerText += "1";
  console.log("botao1 clicked");
};
botaoPorc.onclick = () => {
  entrada.innerText += "%";
  console.log("botaoPorc clicked");
};

botaoCE.onclick = () => {
  entrada.innerText = entrada.innerText.slice(0, -1);
  console.log("botaoCE clicked");
};

botaoC.onclick = () => {
  entrada.innerText = "";
  console.log("botaoC clicked");
};

botaoApagar.onclick = () => {
  entrada.innerText = entrada.innerText.slice(0, -1);
  console.log("botaoApagar clicked");
};

botao7.onclick = () => {
  entrada.innerText += "7";
  console.log("botao7 clicked");
};

botao8.onclick = () => {
  entrada.innerText += "8";
  console.log("botao8 clicked");
};

botao9.onclick = () => {
  entrada.innerText += "9";
  console.log("botao9 clicked");
};

botaoMulti.onclick = () => {
  entrada.innerText += "*";
  console.log("botaoMulti clicked");
};

botao14.onclick = () => {
  entrada.innerText += "4";
  console.log("botao14 clicked");
};

botao15.onclick = () => {
  entrada.innerText += "5";
  console.log("botao15 clicked");
};

botao16.onclick = () => {
  entrada.innerText += "6";
  console.log("botao16 clicked");
};

botaoMenos.onclick = () => {
  entrada.innerText += "-";
  console.log("botaoMenos clicked");
};

botao1.onclick = () => {
  entrada.innerText += "1";
  console.log("botao1 clicked");
};

botao2.onclick = () => {
  entrada.innerText += "2";
  console.log("botao2 clicked");
};

botao3.onclick = () => {
  entrada.innerText += "3";
  console.log("botao3 clicked");
};

botaoSoma.onclick = () => {
  entrada.innerText += "+";
  console.log("botaoSoma clicked");
};

botaoSinais.onclick = () => {
  console.log("botaoSinais clicked");
};

botao0.onclick = () => {
  entrada.innerText += "0";
  console.log("botao0 clicked");
};

botaoVirg.onclick = () => {
  if (!entrada.innerText.includes(".")) {
    entrada.innerText += ".";
  }
  console.log("botaoVirg clicked");
};
