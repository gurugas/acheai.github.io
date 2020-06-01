var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var marcas = document.querySelectorAll(".marca");

    if (this.value.length > 0) {
        for (var i = 0; i < marcas.length; i++) {
            var marca = marcas[i];
            var tdmarca = marca.querySelector(".info-nomedamarca");
            var nome = tdmarca.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                marca.classList.add("invisivel");
            } else {
                marca.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < marcas.length; i++) {
            var marca = marcas[i];
            marca.classList.remove("invisivel");
        }
    }
});