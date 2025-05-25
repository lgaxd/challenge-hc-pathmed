document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const btnMenu = document.getElementById('btn-menu');
const btnClose = document.getElementById('btn-close');
function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
}
btnMenu.addEventListener('click', toggleSidebar);
btnClose.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);