const nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
const contraseña = prompt("Ingrese su contraseña");

if (nombre ===""){
    console.log("Nombre invalido");
}else if  (edad <  18){ 
    console.log("Acceso denegado");
}else if  (contraseña.length < 6 ){
    console.log("Contraseña inválida");
}else {
    console.log(`Bienvenido\nNombre = ${nombre}\nEdad = ${edad}\nContraseña = ${contraseña}`);
    console.log(`Tu nombre es ${nombre} tienes ${edad} años y  tu contraseña es ${contraseña}`);
    console.log(`En 10 años tendras ${edad + 10} años`);
}


