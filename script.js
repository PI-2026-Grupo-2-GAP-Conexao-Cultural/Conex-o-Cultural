const html = document.documentElement;

html.setAttribute("data-tema", localStorage.getItem("tema") || "claro");

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao-tema");

  function atualizarBotao() {
    botao.setAttribute("aria-checked", html.dataset.tema === "escuro");
  }
  atualizarBotao();
  botao.addEventListener("click", () => {
   const novoTema = html.dataset.tema === "escuro" ? "claro" : "escuro";
  html.setAttribute("data-tema", novoTema);
  localStorage.setItem("tema", novoTema);
  atualizarBotao();
  });
});
