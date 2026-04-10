// --- ROTEIRO 07: Introdução ao JavaScript e Validação ---

const form = document.querySelector(".form-contato");

form.addEventListener("submit", function(event) {
    // 1. O formulário não recarrega a página
    event.preventDefault();
    console.log("Formulário enviado!");

    // 2. Os dados são capturados corretamente
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    console.log(nome);
    console.log(email);

    const msgSucesso = document.getElementById("mensagem-sucesso");

    // 3. Validações são aplicadas
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return; 
    }

    if (!email.includes("@")) {
        alert("Email inválido.");
        return; 
    }

    // 4. Mensagens são exibidas ao usuário (Parte 5 e 6)
    msgSucesso.innerText = "Formulário enviado com sucesso!";
    msgSucesso.style.color = "green";
});


// --- ROTEIRO 08: Consumo de API (ViaCEP) ---

const btnCep = document.getElementById("buscarCep");

btnCep.addEventListener("click", function() {
    const cep = document.getElementById("cep").value;
    const displayCep = document.getElementById("resultadoCep");

    console.log("Buscando dados para o CEP: " + cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                displayCep.innerText = "CEP não encontrado.";
                displayCep.style.color = "red";
                return;
            }
            
            displayCep.innerText = dados.logradouro + " - " + dados.localidade;
            displayCep.style.color = "#003366";
        })
        .catch(() => {
            displayCep.innerText = "Erro ao procurar o CEP.";
            displayCep.style.color = "red";
        });
});