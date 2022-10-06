const password = 'test';

function check() {
    const target = document.getElementById('alert');
    const pass_text = document.querySelector('.pass_text');

    const password_value = document.getElementById('password').value;
    if(password_value === password) {
        target.classList.add('hidden');
        console.log('パスワードが正しいです。');
    } else {
        pass_text.textContent = 'パスワードが間違っています。';
        pass_text.classList.add('error');
        console.log('パスワードが間違っています。');
    }
}
