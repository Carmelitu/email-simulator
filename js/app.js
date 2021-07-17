// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners(){
    // inicio
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos
    email.addEventListener('blur', validarForm);
    asunto.addEventListener('blur', validarForm);
    mensaje.addEventListener('blur', validarForm);
}


// Funciones

function iniciarApp(){
    btnEnviar.disabled = false;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');   
}

function validarForm(e){
    if(e.target.value.length > 0){

    } else {
        e.target.classList.add('border', 'border-red-500');
    }
}
