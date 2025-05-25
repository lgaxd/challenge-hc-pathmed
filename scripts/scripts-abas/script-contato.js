document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    document.getElementById('error-nome').textContent = '';
    document.getElementById('error-email').textContent = '';

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome.length < 3) {
        document.getElementById('error-nome').textContent = 'Informe seu nome completo.';
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-email').textContent = 'E-mail inválido.';
        valid = false;
    }

    if (valid) {
        alert('Mensagem enviada! Em breve entraremos em contato.');
        this.reset();
    }
});