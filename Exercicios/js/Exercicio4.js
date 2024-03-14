function intercalarPalavras() {
  
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;
  

    var resultado = intercalar(palavra1, palavra2);
  
    document.getElementById("resultado").value = resultado;
  }
  
  function intercalar(palavra1, palavra2) {
    var resultado = '';
    var i = 0;
    var j = 0;
  
    while (i < palavra1.length || j < palavra2.length) {
      if (i < palavra1.length) {
        resultado += palavra1.charAt(i);
        i++;
      }
      if (j < palavra2.length) {
        resultado += palavra2.charAt(j);
        j++;
      }
    }
  
    return resultado;
  }
  
  document.getElementById("btnIntercalar").addEventListener("click", intercalarPalavras);
  