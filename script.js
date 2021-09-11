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

    // EJERCICIO 7

    let Ejercicio7 = (p_aparato,m_aparato)=>{

       descuento1 = 0;
        

        if(m_aparato == 'NOSY' && p_aparato >= 2000 ){
                descuento1 = p_aparato * 0.15;
                
        }else if(p_aparato >= 2000){
               descuento1 = p_aparato * 0.10;
                
        }
     
        total1 = p_aparato - descuento1;
        iva = (total1 * 0.16)/100;
        return `Valor sin descuento: ${p_aparato}
        \nDescuento: ${descuento1} 
        \nIVA: ${iva} 
        \nVALOR TOTAL A CANCELAR + IVA: ${total1+iva} `    
        } 
           
        
        console.log(Ejercicio7(3000,'NOSY'));


        // EJERCICIO 8

    let Ejercicio8 = (n_piezas,v_piezas)=>{

        total2= n_piezas*v_piezas;
         
 
         if(total2 > 5000){
                 inv = total2 * 0.55;
                 cred = total2 * 0.15;
                 banc = total2 * 0.30;
                 
         }else{
                inv = total2 * 0.70;
                cred = total2 * 0.30;
                banc = 0; 
         }
                int = cred * 0.20;

         return `Inversion: ${inv}
         \nPrestamo Banco: ${banc} 
         \nValor Credito: ${cred} 
         \nIntereses a pagar por el credito: ${int} `    
         } 
            
         
         console.log(Ejercicio8(30,5000));


         // EJERCICIO 9

    let Ejercicio9 = (n_1,n_2)=>{

       
         
 
         if(n_1 == n_2){
                return `Multiplicacion: ${n_1*n_2}`;
                 
         }else if(n_1 > n_2){
                return `Resta: ${n_1-n_2}`;
       
         }else{

                return `Suma: ${n_1+n_2}`;

         }
                   
         } 
            
         
         console.log(Ejercicio9(3,3));