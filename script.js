document.getElementById('form-contato').addEventListener('submit', function(event) {
    // Impede o envio real do formulário para testarmos a lógica
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    if (emailInput.includes('@')) {
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.style.color = 'green';
        this.reset(); // Limpa o formulário
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});

// Interatividade extra: Log de boas-vindas no console
console.log("Portfólio carregado com sucesso!");