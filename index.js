function enviar() {
  let valor1 = document.getElementById("peso").value;
  let valor2 = document.getElementById("altura").value;
  let resultado = (valor1 / (valor2 * valor2)) * 10000;
  console.log("Peso= " + valor1);
  console.log("Altura= " + valor2);
  console.log("IMC= " + resultado);
  //o código abaixo é que linka com o HTML e faz o resultado aparecer no 'p'
  if (resultado <= 18.5) {
    document.getElementById("aparecer").innerHTML =
      "Seu IMC é: " +
      resultado.toFixed(2) +
      " Kg/m² e você está abaixo do peso adequeado";
  } else if (resultado <= 24.9 && resultado > 18.5) {
    document.getElementById("aparecer").innerHTML =
      "Seu IMC é: " + resultado.toFixed(2) + " Kg/m² e você está no peso ideal";
  } else if (resultado <= 29.9 && resultado > 24.9) {
    document.getElementById("aparecer").innerHTML =
      "Seu IMC é: " + resultado.toFixed(2) + " Kg/m² e você está com sobrepeso";
  } else if (resultado <= 34.9 && resultado > 29.9) {
    document.getElementById("aparecer").innerHTML =
      "Seu IMC é: " +
      resultado.toFixed(2) +
      " Kg/m² e você está com obesidade grau 1";
  } else if (resultado <= 39.9 && resultado > 34.9) {
    document.getElementById("aparecer").innerHTML =
      "Seu IMC é: " +
      resultado.toFixed(2) +
      " Kg/m² e você está com obesidade grau 2";
  } else if (resultado <= 44.9 && resultado > 39.9) {
    document.getElementById("aparecer").innerHTML =
      "Seu IMC é: " +
      resultado.toFixed(2) +
      " Kg/m² e você está com obesidade grau 3";
  } else if (resultado <= 49.9 && resultado > 44.9) {
    document.getElementById("aparecer").innerHTML =
      "Seu IMC é: " +
      resultado.toFixed(2) +
      " Kg/m² e você está com obesidade grau 4";
  }
}
