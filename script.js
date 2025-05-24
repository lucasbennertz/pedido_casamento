const botaoNao = document.getElementById("naopodi");
const container = document.querySelector(".buttons");

botaoNao.addEventListener("click", () => {
  const larguraMax = container.clientWidth - botaoNao.offsetWidth;
  const alturaMax = container.clientHeight - botaoNao.offsetHeight;

  const novaLeft = Math.random() * larguraMax;
  const novaTop = Math.random() * alturaMax;

  botaoNao.style.left = novaLeft + "px";
  botaoNao.style.top = novaTop + "px";
});
