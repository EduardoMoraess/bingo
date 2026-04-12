function sortear()
{
    const min = 1;
    const max = 300;
    const display = document.getElementById('resultado');

    //pequeno efeito visual carregando
    display.style.opacity = '0.5';

    setTimeout(()=>{
        //Logica principal do sorteio
        const numeroSorteado = Math.floor(Math.random()*(max - min + 1))+min;

        display.innerText = numeroSorteado;
        display.style.opacity = '1';
    }, 100)
}

function calculoVendas()
{
    let numeros = 120
    let valor = 5 //valor fixo de 5 reais por cada numero
}
calculoVendas()


/*
Como funciona a lógica JavaScript:
Para garantir que o número seja exatamente entre 1 e 300, usamos a seguinte fórmula matemática:

Math.random(): Gera um número decimal entre 0 e 0.999...

(max - min + 1): Multiplicamos pelo intervalo desejado (no caso, 300).

Math.floor(): Arredonda o valor para baixo para termos um número inteiro.

+ min: Soma o valor mínimo para garantir que o resultado não comece em zero.
*/