document.addEventListener('DOMContentLoaded', () => {

    const btnProfile = document.getElementById('btn-profile');
    const dropdown = document.getElementById('dropdown');
    const logout = document.getElementById('logout');
    if (btnProfile && dropdown && logout) {
        btnProfile.addEventListener('click', e => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });
        logout.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = '/pages/inicio.html';
        });
        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });
    }

});