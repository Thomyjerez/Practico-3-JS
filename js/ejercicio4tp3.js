let numero  = prompt("Introduce un numero entero");

let resultado = parOimpar(Number);

document.write ("El numero " + numero + " es " + resultado);

function parOimpar (numero){
    
    if (numero % 2 == 0){
       
        return "par";
    }else{
        return "impar"
    }
}






