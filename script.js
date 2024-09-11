// Defina a data em que começou a namorar (ano, mês-1, dia)
const startDate = new Date(2024, 5, 7); // Exemplo: 1 de janeiro de 2023

function calculateDays() {
    const today = new Date();
    const timeDifference = today - startDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // converter ms em dias

    document.getElementById('daysCounter').textContent = days + " dias";
}

// Define o volume da música de fundo (entre 0 e 1)
document.getElementById('backgroundMusic').volume = 0.2;  // 20% do volume

// Chame a função para atualizar o contador
calculateDays();
