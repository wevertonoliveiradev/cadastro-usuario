document.getElementById("form-cadastro").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Capturando os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const telefone = document.getElementById("telefone").value;
  const dataNascimento = document.getElementById("dataNascimento").value; // Campo de Data de Nascimento

  // Criando o objeto com os dados do usuário
  const dadosUsuario = {
    nome,
    email,
    senha,
    telefone,
    dataNascimento, // Incluindo o campo de Data de Nascimento
  };

  try {
    // Enviando os dados para o Google Apps Script
    await fetch(
      "https://script.google.com/macros/s/AKfycbyRndtjJVj41ZwKEMtVY6vbBGY7lxwSS5No8raWkZw29_yIfjCHyBH6WX9ZCo7lGpHbfg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosUsuario),
        mode: "no-cors", // Modo para evitar erros de CORS
      }
    );

    // Como estamos usando no-cors, não podemos verificar a resposta
    alert("Cadastro realizado com sucesso!"); // Mensagem de sucesso genérica
    document.getElementById("form-cadastro").reset();

  } catch (error) {
    console.error("Erro ao realizar o cadastro:", error);
    alert("Erro ao realizar cadastro: " + error.message);
  }
});
