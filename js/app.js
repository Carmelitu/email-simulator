// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');

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
        // elimina error
        const error = document.querySelector('p.error');
        if (error !== null) {
            error.remove();
          }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        
        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email'){
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if (error !== null) {
                error.remove();
              }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
            
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            
            mostrarError('El email ingresado es inválido');
        }
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0){
        formulario.appendChild(mensajeError);
    }

    
}



