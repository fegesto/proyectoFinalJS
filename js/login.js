let user1 = "JuanPerez"
let password1= "ingresoseguro1234"

let loginOK;

function ingresoUser (){
    
    let ingresoUser = prompt("Por favor ingresa tu nombre de usuario registrado");

    if (ingresoUser === null || ingresoUser.length === 0){

    alert("Por favor, para poder ingresar necesitas tu nombre de usuario resgistrado. Refresca la página para volver a ingresar");
        console.log(user1);
        return;

    }; 

    let passwordUser = prompt("Por favor ingresa tu contraseña");
        
    if (passwordUser === null || passwordUser.length === 0){

        alert("Por favor, para poder ingresar necesitas colocar tu contraseña. refresca la página para volver a ingresar");
    } else if (ingresoUser != user1 || passwordUser != password1) {

        alert("Alguno de tus datos no coinciden con el registro, por favor, refrescá e intentá de nuevo");
        return;
    } else {
        
        alert("Bienvenido "+user1+" a nuestra tienda online");
        loginOK = true;
    }
}