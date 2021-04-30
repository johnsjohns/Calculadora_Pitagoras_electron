let formulario = document.querySelector(".container form");
let cateto1 = document.querySelector("#cateto1");
let cateto2 = document.querySelector("#cateto2");
let resposta = document.querySelector("#hipotenusa");

formulario.addEventListener("submit", (evento) => { //captura evento de quando botão é clicado
  evento.preventDefault(); // previne que a pagina seja recarregada quando o submit e chamado
  let cateto1 = document.querySelector("#cateto1"); 
  let cateto2 = document.querySelector("#cateto2");
  let resposta = document.querySelector("#hipotenusa");

  if (isNaN(cateto1.value) || cateto1.value.trim() === "") { //faz a validação do catato1
    alert("valor do primeiro cateto invalido!");
  } else {
    if (isNaN(cateto2.value) || cateto2.value.trim() === "") { // faz validação do cateto2
      alert("valor do segundo cateto invalido!");
    } else {
      let hipotenusa = Math.sqrt( //calculo do teorema de pitagoras
        Math.pow(parseInt(cateto1.value), 2) +
          Math.pow(parseInt(cateto2.value), 2)
      );

      resposta.innerHTML = hipotenusa;
    }
  }
});
