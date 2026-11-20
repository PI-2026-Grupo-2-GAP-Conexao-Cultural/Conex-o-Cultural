document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao-tema");
  if (!botao) return;

  const temaSalvo = localStorage.getItem("tema-preferido");
  const temaSistemaEscuro = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const temaInicial = temaSalvo || (temaSistemaEscuro ? "escuro" : "claro");

  function aplicarTema(tema) {
    const escuro = tema === "escuro";
    document.documentElement.setAttribute("data-tema", tema);
    botao.setAttribute("aria-checked", String(escuro));

    const icone = botao.querySelector(".icone");
    const rotulo = botao.querySelector(".rotulo");

    if (icone) icone.textContent = escuro ? "☀️" : "🌙";
    if (rotulo) rotulo.textContent = escuro ? "Modo claro" : "Modo escuro";
    botao.setAttribute("aria-label", escuro ? "Light mode" : "Dark mode");
  }

  aplicarTema(temaInicial);

  botao.addEventListener("click", () => {
    const atual = document.documentElement.getAttribute("data-tema") === "escuro" ? "escuro" : "claro";
    const novo = atual === "escuro" ? "claro" : "escuro";
    localStorage.setItem("tema-preferido", novo);
    aplicarTema(novo);
  });
});
