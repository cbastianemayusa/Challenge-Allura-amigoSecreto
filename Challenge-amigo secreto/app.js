// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigoSecreto =[]; 
let sorteo = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    if(amigo.trim() === ''){
        alert("el campo esta vacio");
    }else if(!soloLetras.test(amigo)){
        alert("por favor ingresa nombre validos");
    }else{
        nombreAmigoSecreto.push(amigo);
        console.log(nombreAmigoSecreto);                
    }
    limpiar();
    return;
}

function limpiar(){
    let limpiarCaja = document.querySelector('#amigo');
    limpiarCaja.value ='' ;
    
}


function sortearAmigo(){
    
    if(nombreAmigoSecreto.length){

        
        const sorteo = Math.floor(Math.random()*nombreAmigoSecreto.length);
        const  amigoSorteado = nombreAmigoSecreto[sorteo];

        const  resultado = document.getElementById('resultado');
        resultado.innerHTML += `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;

        
        
        return amigoSorteado;

              
       
    } else {
        alert("No hay amigos para sortear.");
        return null;
    }

    
}
        
  