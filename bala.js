function atualizartexto(){
    const nome= document.getElementById("nome").value;
    const cpf= document.getElementById("cpf").value;
    const curso= document.getElementById("curso").value;
    const duracao= document.getElementById("duracao").value;

    document.getElementById("pao1").innerText= nome;
    document.getElementById("pao2").innerText= cpf;
    document.getElementById("pao3").innerText= curso;
    document.getElementById("pao4").innerText= duracao;
}


