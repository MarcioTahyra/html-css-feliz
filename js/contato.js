function validar(){
    let nome = document.getElementById("nome").value
    let tel = document.getElementById("tel").value
    let email = document.getElementById("email").value

    if(nome == "" || tel=="" || email==""){
        alert("Por favor, preencha todos os campos")
    }else{
        alert("Entraremos em contato!")
    }
}