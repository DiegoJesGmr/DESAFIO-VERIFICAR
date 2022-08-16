const nombre = document.querySelector('#nombre')
const pswrd = document.querySelector('#pswrd')
const form = document.querySelector('#form')
const errorElement = document.querySelector('#error')



form.addEventListener('submit',(e) =>{
    let mensaje = [];
    let mayus = /[A-Z]/g;
    let minus = /[a-z]/g;
    let sp = ' ';
    if(pswrd.value.length <=  12){
        mensaje.push("La contraseña debe tener un minimo de 12 caracteres")
    }
    if(pswrd.value.match(mayus)){

    }else{
        mensaje.push("La contraseña debe tener 1 mayus")
    }
    if(pswrd.value.match(minus)){

    }else {
        mensaje.push("La contraseña debe tener 1 minuscula")
    }


    if(mensaje.length > 0){
        e.preventDefault();
        errorElement.innerHTML = mensaje.join(', ')
    }
})