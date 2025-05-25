document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const ans = q.nextElementSibling;
        const isOpen = ans.style.display === 'block';
        ans.style.display = isOpen ? 'none' : 'block';
    });
});