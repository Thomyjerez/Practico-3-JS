let perimetro=(lado1, lado2)=>{
    return 2*(lado1+lado2);
}

let lado1=parseFloat(prompt('Ingrese el valor del lado A'));
let lado2=parseFloat(prompt('Ingrese el valor del lado B'));

document.write(`El perimetro del rectángulo ingresado es: ${perimetro(lado1, lado2)} centimetros.`);