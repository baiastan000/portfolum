// Интерактивный скрипт для сайта-портфолио
document.addEventListener('DOMContentLoaded', () => {
console.log("Портфолио Баястана успешно загружено!");

// Обработка клика по кнопке приветствия в секции контактов
const alertBtn = document.getElementById('alert-btn');
if (alertBtn) {
    alertBtn.addEventListener('click', () => {
        alert('Спасибо, что заглянули в моё портфолио! Можете связаться со мной через WhatsApp.');
    });
}
});