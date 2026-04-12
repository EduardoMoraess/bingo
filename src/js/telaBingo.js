// Usa a mesma chave "bingo_v2" do código anterior para ler os dados
const marcados = JSON.parse(localStorage.getItem("bingo_v2")) || {};

function renderizarPainel() {
    const grid = document.getElementById("grid-bingo");

    for (let i = 1; i <= 300; i++) {
        const numDiv = document.createElement("div");
        numDiv.className = "numero";
        numDiv.innerText = i;

        // Verifica se o número consta como marcado no LocalStorage
        if (marcados[i]) {
            numDiv.classList.add("vendido");
        }

        grid.appendChild(numDiv);
    }
}

// Inicia a renderização ao carregar a página
renderizarPainel();