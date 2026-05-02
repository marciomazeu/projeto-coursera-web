// 1. Validação do Formulário de Contato
const form = document.getElementById('form-contato');
const emailInput = document.getElementById('email');

if (form) {
    form.addEventListener('submit', function(event) {
        // Evita que a página recarregue ao clicar em enviar
        event.preventDefault();

        const emailValue = emailInput.value;

        // Lógica simples para verificar se o e-mail parece válido
        if (emailValue.includes('@') && emailValue.includes('.')) {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset(); // Limpa os campos após o envio
        } else {
            alert('Por favor, insira um endereço de e-mail válido.');
        }
    });
}

// 2. Efeito de Interatividade: Mensagem de Boas-vindas no Console
// (Útil para mostrar que o script está rodando corretamente)
window.onload = function() {
    console.log("Portfólio interativo carregado com sucesso.");
};

// 3. Funcionalidade Extra: Scroll Suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});