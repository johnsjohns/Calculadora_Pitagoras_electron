let formulario = document.querySelector(".container form");
let cateto1 = document.querySelector("#cateto1");
let cateto2 = document.querySelector("#cateto2");
let resposta = document.querySelector("#hipotenusa");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let cateto1 = document.querySelector("#cateto1");
  let cateto2 = document.querySelector("#cateto2");
  let resposta = document.querySelector("#hipotenusa");

  if (isNaN(cateto1.value) || cateto1.value.trim() === "") {
    alert("valor do primeiro cateto invalido!");
  } else {
    if (isNaN(cateto2.value) || cateto2.value.trim() === "") {
      alert("valor do segundo cateto invalido!");
    } else {
      let hipotenusa = Math.sqrt(
        Math.pow(parseInt(cateto1.value), 2) +
          Math.pow(parseInt(cateto2.value), 2)
      );

      resposta.innerHTML = hipotenusa;
    }
  }
});
