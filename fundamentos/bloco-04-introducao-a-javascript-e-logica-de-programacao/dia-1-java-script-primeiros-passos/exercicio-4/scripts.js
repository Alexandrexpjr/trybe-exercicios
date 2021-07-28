let situacao = "lista";

switch (situacao) {
    case "aprovada":
        console.log("Você foi aprovado(a)!");
        break;
    case "lista":
        console.log("Você está na lista de espera!");
        break;
    case "reprovada":
        console.log("Você foi reprovado(a).");
        break;     
    default: 
    console.log("Não se aplica");
}
