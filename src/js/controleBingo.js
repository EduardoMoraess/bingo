let marcados = JSON.parse(localStorage.getItem("bingo_v2")) || {};

function atualizarContador() {
    const total = Object.keys(marcados).length;
    document.getElementById("count").innerText = total;
}

function salvar() {
    localStorage.setItem("bingo_v2", JSON.stringify(marcados));
    atualizarContador();
}

function criarBloco(inicio, fim, titulo) {
    const container = document.getElementById("container");
    const bloco = document.createElement("div");
    bloco.className = "bloco";

    const tituloEl = document.createElement("div");
    tituloEl.className = "titulo";
    tituloEl.innerText = titulo;

    const grid = document.createElement("div");
    grid.className = "grid";

    for (let i = inicio; i <= fim; i++) {
        const num = document.createElement("div");
        num.className = "numero";
        num.innerText = i;

        if (marcados[i]) num.classList.add("marcado");

        num.onclick = () => {
            num.classList.toggle("marcado");
            if (num.classList.contains("marcado")) {
                marcados[i] = true;
            } else {
                delete marcados[i];
            }
            salvar();
        };

        grid.appendChild(num);
    }

    bloco.appendChild(tituloEl);
    bloco.appendChild(grid);
    container.appendChild(bloco);
}

function resetar() {
    if (confirm("Isso apagará todos os registros de vendas. Confirmar?")) {
        localStorage.removeItem("bingo_v2");
        location.reload();
    }
}

// Iniciar blocos
for (let i = 0; i < 6; i++) {
    let ini = (i * 50) + 1;
    let fim = ini + 49;
    criarBloco(ini, fim, `De ${ini} a ${fim}`);
}

atualizarContador();
