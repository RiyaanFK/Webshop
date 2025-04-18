document.querySelector('.btn-light').addEventListener('click', function() {
    const html = document.querySelector('html');
    if (html.classList.contains('bg-dark')) {
        html.classList.remove('bg-dark');
    }
    html.classList.add('bg-light');
    localStorage.setItem('theme', 'bg-light');
});

document.querySelector('.btn-dark').addEventListener('click', function() {
    const html = document.querySelector('html');
    if (html.classList.contains('bg-light')) {
        html.classList.remove('bg-light');
    }
    html.classList.add('bg-dark');
    localStorage.setItem('theme', 'bg-dark');
});

window.addEventListener('DOMContentLoaded', function () {
    if(!localStorage.getItem('theme')) {
        return;
    }
    const html = document.querySelector('html');
    html.classList.add(localStorage.getItem('theme'));
    
    const email = doccument.querySelector('#email');
    const password = document.querySelector('#password');

    email.value = this.localStorage.getItem('email', email.value);
    password.value = this.localStorage.getItem('password', password.value);
});

document.querySelector('#login').addEventListener('click', function() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
});