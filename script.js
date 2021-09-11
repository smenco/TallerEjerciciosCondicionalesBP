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


// EJERCICIO 3

let Ejercicio3 = (monto_finanza)=>{

    
    if(monto_finanza < 50000){
            cuota = monto_finanza * 0.03;
            
    }else{
           cuota = monto_finanza * 0.02;
            
    }
    
    return `Cuota a pagar por el monto ingresado: ${cuota}`;

        
    } 
       
    
    console.log(Ejercicio3(60000));


    // EJERCICIO 4

    let Ejercicio4 = (p_d1,p_d2,p_d3,p_d4,p_d5,g_1,g_2,g_3,g_4,g_5)=>{


        g_totaldias = g_1+g_2+g_3+g_4+g_5;
        p_totaldias = (p_d1+p_d2+p_d3+p_d4+p_d5)/5;

        if(p_totaldias > 170){
                m = g_totaldias * 0.50;
                
        }else{
               m = 0;
                
        }
        
        return `Dinero perdido despues de la revision: ${m}`;

    
            
        } 
           
        
        console.log(Ejercicio4(200,200,200,200,200,10000,20000,30000,40000,40000));

        
    // EJERCICIO 5

    let Ejercicio5 = (valor,dev_coche,valoracion_terreno)=>{

            dev_cochef = ((dev_coche/100)*valor)*(36);
    
            valoracion_terrenof = ((valoracion_terreno/100)*valor)*(36);
            m= valoracion_terrenof/2;

            if(dev_cochef < m){
                    return "Comprar Automovil"
                    
            }else{
                   return "No Comprar Automovil"
                    
            }
        
                
            } 
               
            
            console.log(Ejercicio5(30000,10,10));

   // EJERCICIO 6

   let Ejercicio6 = (numero_computadoras)=>{

       
        valor_t = numero_computadoras * 11000;

     

        if(numero_computadoras < 5){
                descuento = valor_t * 0.10;
                
        }else if(numero_computadoras < 10){
               descuento = valor_t * 0.20;
                
        }else{
                descuento = valor_t * 0.40
        }
    
        return `Valor total a pagar es: ${valor_t-descuento}
        \nDinero descontado: ${descuento} `;

            
        } 
           
        
        console.log(Ejercicio6(5));