
var marcas = document.querySelectorAll(".marca");
console.log(marcas);

//array 
for( var i = 0; i < marcas.length; i++){
    console.log(marcas[i]);
}

//esucta o click do botaoAdicionar pela id e recarrega a pagina
var botaoAdicionar = document.querySelector("#adicionar-medicamento");
botaoAdicionar.addEventListener("click", function(){
event.preventDefault();

//trazer o form do mundo html para js
//selecionei o form com os inputs dele
//acesso as variáveis do input pelo name
var form = document.querySelector("#form-adiciona");

var marca = obtemPacienteDoFormulario(form)

var marcaTr = montaTr(marca);


//vou criar uma marca que é uma tr passando o nome da tag
//criou a variável tabela para incluir a tr criada anteriormente e add paciente na tabela
var tabela = document.querySelector("#tabela-marca");
tabela.appendChild(marcaTr);
form.reset();
});


//medicamento, linha e repcontato são itens comuns ao objeto marca (propriedades do objeto), busco do form pelo name e value.
function obtemPacienteDoFormulario(form){

    var marca = {

        medicamento: form.medicamento.value, 
        linha: form.linha.value,
        repcontato: form.repcontato.value

    }

    return marca 
    
}

function montaTr(marca){
    var marcaTr = document.createElement("tr");
    marcaTr.classList.add("marca");

    marcaTr.appendChild(montaTd(marca.medicamento, "info-nomedamarca"));
    marcaTr.appendChild(montaTd(marca.linha, "info-nomedalinha"));
    marcaTr.appendChild(montaTd(marca.repcontato, "info-repcontato"));

    return marcaTr
}

function montaTd(dado, classe){
var td = document.createElement("td");
td.textContent = dado;
td.classList.add(classe)

return td;
}