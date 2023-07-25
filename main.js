//Variables
let precio;
let sumaTotal = 0;
let salir = false;
let i = 0;
let nombre;
//proceso
nombre= prompt("Ingrese su nombre");
sumaDeComparas();
alert("Hola "+ nombre +" la suma total es: " + sumaTotal);

//Funcion de suma de compras
function sumaDeComparas(){
    while(salir != true){
        precio= parseFloat(prompt("Ingrese el valor del producto " + i));
        if(precio===0){
            salir=true;
        }
        else{
        sumaTotal= precio + sumaTotal;
        i++;}
        }

}
