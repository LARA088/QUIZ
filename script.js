const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você está curtindo com as suas amigas em uma festa e avista um grupo de rapazes vindo em sua direção. Em relação as características físicas, qual você prefere?",
        alternativas: [
            {
                texto: "Moreno",
                afirmacao: "Seu par perfeito é um garoto moreno,  "
            },
            {
                texto: "Loiro",
                afirmacao: "Seu par perfeito é um garoto loiro, "
            }
        ]
    },
    {
        enunciado: "Ao convesar com eles, você se identifica mais com:",
        alternativas: [
            {
                texto: "Tímido",
                afirmacao: "tímido,"
            },
            {
                texto: "Extrovertido",
                afirmacao: "extrovertido,"
            }
        ]
    },
    {
        enunciado: "Tendo em vista os hobbies deles, voc~e se interessa mais por garotos que:",
        alternativas: [
            {
                texto: "praticam esportes",
                afirmacao: "atleta,"
            },
            {
                texto: "jogam jogos online",
                afirmacao: "gamer,"
            }
        ]
    },
    {
        enunciado: "Em relação ao seu estilo de roupa, você acha mais atraente:",
        alternativas: [
            {
                texto: "playboy",
                afirmacao: "playboy."
            },
            {
                texto: "cowboy",
                afirmacao: "cowboy. "
            }
        ]
    },  
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

