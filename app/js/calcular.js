let formulario = document.querySelector(".container form");
let cateto1 = document.querySelector("#cateto1");
let cateto2 = document.querySelector("#cateto2");
let resposta = document.querySelector("#hipotenusa");

formulario.addEventListener("submit", (evento) => {
  //captura evento de quando botão é clicado
  evento.preventDefault(); // previne que a pagina seja recarregada quando o submit e chamado
  let cateto1 = document.querySelector("#cateto1");
  let cateto2 = document.querySelector("#cateto2");
  let erro1 = document.querySelector(".cateto1_span");
  let erro2 = document.querySelector(".cateto2_span");
  let resposta = document.querySelector("#hipotenusa");

  if (isNaN(cateto1.value) || cateto1.value.trim() === "") {
    //faz a validação do catato1
    erro1.innerHTML = "Valor do primeiro cateto invalido!";
    erro2.innerHTML = "";
  } else {
    if (isNaN(cateto2.value) || cateto2.value.trim() === "") {
      // faz validação do cateto2
      erro2.innerHTML = "Valor do segundo cateto invalido!";
      erro1.innerHTML = "";
    } else {
      let hipotenusa = Math.sqrt(
        //calculo do teorema de pitagoras
        Math.pow(parseInt(cateto1.value), 2) +
          Math.pow(parseInt(cateto2.value), 2)
      );
      erro1.innerHTML = "";
      erro2.innerHTML = "";
      resposta.innerHTML = hipotenusa;
    }
  }
});
