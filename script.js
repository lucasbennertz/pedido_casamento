const botaoNao = document.getElementById("naopodi");
const container = document.querySelector(".buttons");
const botaoSim = document.getElementById("aceitou");

botaoNao.addEventListener("click", () => {
  const larguraMax = container.clientWidth - botaoNao.offsetWidth;
  const alturaMax = container.clientHeight - botaoNao.offsetHeight;

  const novaLeft = Math.random() * larguraMax;
  const novaTop = Math.random() * alturaMax;

  botaoNao.style.left = novaLeft + "px";
  botaoNao.style.top = novaTop + "px";
});
botaoSim.addEventListener("click", () => {
  document.location.href()
});