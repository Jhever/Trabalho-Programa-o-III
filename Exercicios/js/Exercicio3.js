function inverterNomes() {
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nome3 = document.getElementById("nome3").value;
    var nome4 = document.getElementById("nome4").value;
    var nome5 = document.getElementById("nome5").value;
  
    var nomes = [nome1, nome2, nome3, nome4, nome5];
  
    nomes.reverse();
  
    document.getElementById("nome1").value = nomes[0];
    document.getElementById("nome2").value = nomes[1];
    document.getElementById("nome3").value = nomes[2];
    document.getElementById("nome4").value = nomes[3];
    document.getElementById("nome5").value = nomes[4];
  }
    document.getElementById("btnInverter").addEventListener("click", inverterNomes);
  