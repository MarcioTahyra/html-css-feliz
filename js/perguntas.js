function perguntas(){
    var r1 = prompt("Pergunta 1")
    if (r1 == "resposta"){
        alert("Correto")
    }else
        alert("A resposta certa é... 1")

    var r2 = prompt("Pergunta 2")
    if (r2 == "resposta"){
        alert("Correto")
    }else
        alert("A resposta certa é... 2")

    var r3 = prompt("Pergunta 3")
    if (r3 == "resposta"){
        alert("Correto")
    }else
        alert("A resposta certa é... 3")
}

document.getElementById("perguntas").addEventListener("click", perguntas)