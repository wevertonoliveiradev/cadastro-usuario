document.getElementById("form-cadastro").addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const dataNascimento = document.getElementById("dataNascimento").value;

    const dadosUsuario = {
      nome,
      email,
      senha,
      telefone,
      dataNascimento
    };

    try {
      const resposta = await fetch("https://script.google.com/macros/s/AKfycbyRndtjJVj41ZwKEMtVY6vbBGY7lxwSS5No8raWkZw29_yIfjCHyBH6WX9ZCo7lGpHbfg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosUsuario)
      });

      const resultado = await resposta.json();

      if (resultado.success) {
        alert("Cadastro realizado com sucesso!");
        document.getElementById("form-cadastro").reset();
      } else {
        throw new Error(resultado.error || "Erro ao cadastrar usuário");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao realizar cadastro: " + error.message);
    }
  });