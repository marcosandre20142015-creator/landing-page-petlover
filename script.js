document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. SCRIPT DO FAQ (ACCORDION) ---
    const perguntas = document.querySelectorAll(".faq-pergunta");

    perguntas.forEach(pergunta => {
        pergunta.addEventListener("click", () => {
            const item = pergunta.parentElement;
            const resposta = item.querySelector(".faq-resposta");
            const estaAberto = item.classList.contains("ativo");

            document.querySelectorAll(".faq-item").forEach(i => {
                i.classList.remove("ativo");
                i.querySelector(".faq-resposta").style.maxHeight = null;
            });

            if (!estaAberto) {
                item.classList.add("ativo");
                resposta.style.maxHeight = resposta.scrollHeight + "px";
            }
        });
    });

    // --- 2. SCRIPT DE ANIMAÇÃO AO ROLAR (SCROLL EFFECT) ---
    // Cria uma ferramenta do navegador para monitorar o que aparece na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela, adiciona a classe que anima
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-visivel");
            }
        });
    }, {
        threshold: 0.15 // Ativa a animação quando 15% do elemento aparecer
    });

    // Seleciona o que queremos animar (Seções e Cards)
    const elementosParaAnimar = document.querySelectorAll(".hero, .card-beneficio, .card-plano, .depoimento");
    
    elementosParaAnimar.forEach(el => {
        el.classList.add("scroll-escondido"); // Aplica o estado inicial (invisível)
        observer.observe(el); // Começa a monitorar o elemento
    });
});