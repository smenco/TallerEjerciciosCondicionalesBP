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

let Ejercicio2 = (valor_compra,numero_escogido)=>{

    
if(numero_escogido >= 74){
        desc = valor_compra * 0.20;
        tot = valor_compra - desc;
}else{
       desc = valor_compra * 0.15;
        tot = valor_compra - desc;
}

return `Precio total compra con descuento: ${tot}
    \nDinero descontado: ${desc} `;
} 
   


console.log(Ejercicio2(8000,72));

