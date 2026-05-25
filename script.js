// Array com dicas sustentáveis baseadas no tema do Agrinho 2026
const dicas = [
    "A rotação de culturas preserva os nutrientes do solo paranaense e reduz pragas.",
    "A agricultura de precisão reduz o desperdício de água e defensivos agrícolas.",
    "O plantio direto protege o solo contra a erosão causada pelas chuvas intensas.",
    "Preservar as Matas Ciliares protege os rios e garante água para o futuro do agro."
];

const botao = document.getElementById("btn-dica");
const textoDica = document.getElementById("texto-dica");

botao.addEventListener("click", function() {
    // Sorteia uma dica aleatória do array
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    textoDica.textContent = dicas[indiceAleatorio];
});
