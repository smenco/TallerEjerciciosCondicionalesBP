// EJERCICIO 1

let Ejercicio1 = (numero_camisas,precio_camisas)=>{

    let subt = numero_camisas * precio_camisas;
if(numero_camisas >= 3){
        desc = subt * 0.30;
        tot = subt - desc
}else{
       desc = subt * 0.10;
        tot = subt - desc;
}

return `El precio total es: ${tot}`;
} 
   


console.log(Ejercicio1(3,3000));


// EJERCICIO 2

