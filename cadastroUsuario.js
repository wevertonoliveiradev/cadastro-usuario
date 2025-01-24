document.getElementById("form-cadastro").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Capturando os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const telefone = document.getElementById("telefone").value;
  const dataNascimento = document.getElementById("dataNascimento").value;

  // Criando o objeto com os dados do usuário
  const dadosUsuario = {
    nome,
    email,
    senha,
    telefone,
    dataNascimento,
  };

  try {
    // Enviando os dados para o Google Apps Script
    const resposta = await fetch(
      "https://script.google.com/macros/s/AKfycbyRndtjJVj41ZwKEMtVY6vbBGY7lxwSS5No8raWkZw29_yIfjCHyBH6WX9ZCo7lGpHbfg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosUsuario),
      }
    );

    // Tratando a resposta
    if (!resposta.ok) {
      throw new Error(`HTTP status ${resposta.status}`);
    }

    const resultado = await resposta.json();

    // Verificando o sucesso da operação
    if (resultado.success) {
      alert("Cadastro realizado com sucesso!");
      document.getElementById("form-cadastro").reset();
    } else {
      throw new Error(resultado.mensagem || "Erro ao cadastrar usuário");
    }
  } catch (error) {
    console.error("Erro ao realizar o cadastro:", error);
    alert("Erro ao realizar cadastro: " + error.message);
  }
});
