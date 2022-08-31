function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmdolarNumerico = parseFloat(valor);
  var valorEmreal = valorEmdolarNumerico * 5.12;
  var valorConvertido = document.getElementById("valorConvertido");
  var resultado = "O resultado em real é R$" + valorEmreal;
  valorConvertido.innerHTML = resultado;
}
