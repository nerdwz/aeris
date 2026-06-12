const hour = new Date().getHours();
let greeting = "Boa noite!";

if (hour < 12) {
    greeting = "Bom dia!";
} else if (hour < 18) {
    greeting = "Boa tarde!";
}

document.getElementById("greeting-time").textContent = greeting;

const motivationalQuotes = [
    "Eu não tenho sorte, eu faço a minha própria sorte. O mesmo vale para os meus resultados.",
    "A única vez que o sucesso vem antes do trabalho é no dicionário. Vá treinar.",
    "Você quer desculpas ou quer resultados? Os dois não cabem na mesma rotina.",
    "Eu não mudo quem eu sou pelo que os outros pensam. Eu mudo o meu corpo pelo que eu exijo de mim.",
    "Não jogue para não perder. Jogue para dominar o jogo.",
    "Quando você estiver cansado, lembre-se de quem você quer se tornar. Ele não pararia agora.",
    "As pessoas que dizem que você não consegue são as mesmas que vão te ver vencer de camarote.",
    "Seus limites são apenas uma barreira psicológica que você aceitou como real. Quebre-os.",
    "A dor é temporária. O fracasso de ter desistido dura para sempre.",
    "Eu não sigo regras, eu dito o ritmo do meu progresso.",
    "Trabalhe em silêncio. Deixe que o seu espelho e os seus resultados façam o barulho por você.",
    "Se você vai fazer algo, faça para ser o melhor da sala. Inclusive na academia.",
    "O foco não é apenas dizer sim ao treino, é dizer não a todas as distrações cotidianas.",
    "Metas fáceis produzem pessoas comuns. Eu prefiro o topo.",
    "Minha única competição é o espelho. E eu pretendo vencer todos os dias.",
    "Vença a si mesmo primeiro. O resto é consequência.",
    "Não me dê desculpas, me dê execuções perfeitas.",
    "Primeiro eles ignoram, depois eles copiam.",
    "Excelência não é um ato, é o meu padrão diário.",
    "Se você quer o topo, aja como se já estivesse lá."

];

const today = new Date();
const startOfYear = new Date(today.getFullYear(), 0, 0);
const diff = today - startOfYear;
const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

const quoteIndex = dayOfYear % motivationalQuotes.length;
const todayQuote = motivationalQuotes[quoteIndex];

document.getElementById("greeting-message").textContent = todayQuote;