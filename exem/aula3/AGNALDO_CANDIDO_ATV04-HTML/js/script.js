let estado = 1;
function trocarImagem() {
    var imagem = document.getElementById("imagem");
     if (estado == 1) {
         imagem.src = "assets/imagens/Silksong-Screenshots-_0003_17.png";
          estado = 2; 
     } else if (estado == 2) {
         imagem.src = "assets/imagens/Silksong-Screenshots-_0006_14.png"; 
         estado = 3; // 
     } else if (estado == 3) {
         imagem.src = "assets/imagens/Silksong-Screenshots-_0009_11.png"; 
         estado = 4; 
     }  else if (estado == 4) {
         imagem.src = "assets/imagens/Silksong-Screenshots-_0004_16.png"; 
         estado = 5;
     }else {
         imagem.src = "assets/imagens/Silksong-Screenshots-_0014_6.png"; 
         estado = 1; 
     }         
}