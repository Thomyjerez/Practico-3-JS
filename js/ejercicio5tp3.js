
function cadena (texto) {
    
    if(texto === texto.toUpperCase()){
        document.write("El texto esta formado por mayusculas")

    }else if (texto === texto.toLowerCase()){
        document.write("El texto esta formado por minusculas")
    }else{
        document.write("El texto esta formado por mayusculas y minusculas")
    }
    
}

let texto = prompt("Ingrese un texto")
 