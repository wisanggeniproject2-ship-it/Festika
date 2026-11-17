document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const notification = document.getElementById('notification');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'user' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'beranda.html';
        } else {
            notification.textContent = 'Username atau password salah!';
            notification.className = 'notification error';
            notification.classList.remove('hidden');
            
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 3000);
        }
    });
});