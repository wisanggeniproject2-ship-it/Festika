document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn && !window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index.html';
    }
    
    if (isLoggedIn && window.location.pathname.endsWith('index.html')) {
        window.location.href = 'beranda.html';
    }
});