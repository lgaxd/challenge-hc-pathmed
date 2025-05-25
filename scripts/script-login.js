document.querySelectorAll('.toggle-visibility').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const img = btn.querySelector('img');
        if (input.type === 'password') {
            input.type = 'text';
            img.src = '/images/utilidades/icon-visibilidade-off.png';
            img.alt = 'Ocultar senha';
        } else {
            input.type = 'password';
            img.src = '/images/utilidades/icon-visibilidade.png'; // icon for "visible"
            img.alt = 'Mostrar senha';
        }
    });
});

const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
const rghcRegex = /^\d{7}[A-Za-z]$/;

document.getElementById('btn-entrar').addEventListener('click', () => {
    const cpfInput = document.getElementById('cpf').value.trim();
    const rghcInput = document.getElementById('rghc').value.trim();
    let valid = true;

    // limpa mensagens antigas
    document.getElementById('cpf-error').textContent = '';
    document.getElementById('rghc-error').textContent = '';

    // valida CPF
    if (!cpfRegex.test(cpfInput)) {
        document.getElementById('cpf-error').textContent = 'CPF inválido. Use 11 dígitos (com ou sem . e -).';
        valid = false;
    }

    // valida RGHC
    if (!rghcRegex.test(rghcInput)) {
        document.getElementById('rghc-error').textContent = 'RGHC inválido. Deve ter 7 dígitos seguidos de uma letra.';
        valid = false;
    }

    if (valid) {
        // para demo, redireciona para outra página
        window.location.href = 'dashboard.html';
    }
});