document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  const userSalvo = localStorage.getItem('usuarioSalvo');
  const senhaSalva = localStorage.getItem('senhaSalva');

  if (usuario === userSalvo && senha === senhaSalva) {
    localStorage.setItem('usuarioLogado', usuario);
    alert('Login bem-sucedido!');
    window.location.href = 'index.html';
  } else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
});
