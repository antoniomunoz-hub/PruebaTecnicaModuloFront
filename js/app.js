// Variables

let paises = [];
let documentos = [];
const fisica = document.getElementById('fisica');
const juridica = document.getElementById('juridica');
const nombre = document.getElementById('nombre');

//Eventos

fisica.addEventListener('click', function(){
    const nombreSociedad = document.getElementById('nombre-sociedad');
    nombreSociedad.style.display = 'none';
    const personaJuridica = document.getElementById('persona-fisica');
    personaJuridica.style.display = 'block';
});

juridica.addEventListener('click', function(){
    const personaJuridica = document.getElementById('persona-fisica');
    personaJuridica.style.display = 'none';
    const nombreSociedad = document.getElementById('nombre-sociedad');
    nombreSociedad.style.display = 'block';
});


//Funciones

//Peticion para la carga de los paises.json en el select

function cargarPaises(){
    fetch('../data/paises.json') 
    .then(response => response.json()) 
    .then(data =>{
        paises = data;
        var comboPaises = document.getElementById('cmbPaises'); 
         
         
        for(var i = 0; i < paises.length; i++){
           var opt = document.createElement('option'); 
           opt.innerHTML = paises[i].name; 
           opt.value = paises[i].code; 
           comboPaises.appendChild(opt); 
        }
    });
}

//Peticion para la carga de los documentos.json en el select

function cargarDocumentos(){
    fetch('../data/documentos.json') 
    .then(response => response.json()) 
    .then(data =>{
        documentos = data;
        var comboDocumentos = document.getElementById('cmbDocumentos'); 
         
         
        for(var i = 0; i < documentos.length; i++){
           var opt = document.createElement('option'); 
           opt.innerHTML = documentos[i].tipo; 
           opt.value = documentos[i].tipo; 
           comboDocumentos.appendChild(opt); 
        }
    });
}

function validarFormulario(e){
    if(e.target.value.lenght > 0){
        console.log('Has escrito');
    }else{
        e.target.style.borderColor= 'red'
    }
}



(function() {
    cargarPaises();
})();

(function() {
    cargarDocumentos();
})();




