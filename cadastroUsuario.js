document.getElementById('cadastro-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const dados = {
    nomeResponsavel: document.getElementById('nomeResponsavel').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    senha: document.getElementById('senha').value,
    dataNascimento: document.getElementById('dataNascimento').value
  };

  // Enviar dados para o Google Apps Script via POST
  fetch('https://script.google.com/macros/s/AKfycbyRndtjJVj41ZwKEMtVY6vbBGY7lxwSS5No8raWkZw29_yIfjCHyBH6WX9ZCo7lGpHbfg/exec', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('mensagem').innerText = 'Usuário cadastrado e planilha criada com sucesso!';
    } else {
      document.getElementById('mensagem').innerText = 'Erro ao cadastrar usuário: ' + data.error;
    }
  })
  .catch(error => {
    document.getElementById('mensagem').innerText = 'Erro ao enviar os dados. Tente novamente mais tarde.';
    console.error('Erro ao enviar dados:', error);  // Melhorar a visibilidade de erros no console
  });
});
