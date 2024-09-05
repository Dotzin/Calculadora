const Botoes = document.querySelectorAll(".btnnumero");
const Display = document.querySelector("#Display");
const Entrada = document.querySelector("#Entrada");
const operacoes = document.querySelectorAll(".ope");
Botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    Entrada.innerText += botao.textContent;
  });
});
operacoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (Entrada.innerText === "" && botao.innerText !== "-") return;

    const lastChar = Entrada.innerText.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
      Entrada.innerText = Entrada.innerText.slice(0, -1) + botao.innerText;
    } else {
      Display.innerText += Entrada.innerText + botao.innerText;
      Entrada.innerText = "";
    }
  });
});
document.getElementById("botaoPorc").onclick = () => {
  Entrada.innerText = Entrada.innerText / 100;
};
document.getElementById("botaoCE").onclick = () => {
  Entrada.innerText = "";
};
document.getElementById("botaoC").onclick = () => {
  Entrada.innerText = "";
  Display.innerText = "";
};
document.getElementById("botaoIgual").onclick = () => {
  Display.innerText += Entrada.innerText;
  let resultado = eval(Display.innerText);
  console.log(resultado);
  Display.innerText = "";
  Entrada.innerText = resultado;
};
document.getElementById("botaoOnePer").onclick = () => {
  Entrada.innerText = `1/(${Entrada.innerText})`;
};
document.getElementById("botaoRad").onclick = () => {
  Entrada.innerText = Entrada.innerText * Entrada.innerText;
};
document.getElementById("botaoSqrt").onclick = () => {
  Entrada.innerText = Math.sqrt(Entrada.innerText);
};
document.getElementById("botaoApagar").onclick = () => {
  Entrada.innerText = Entrada.innerText.slice(0, -1);
};
