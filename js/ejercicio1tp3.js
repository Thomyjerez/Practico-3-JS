let meses = [`enero`, "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

document.write(`<ul>`)

for( let indice = 0; indice < meses.length; indice++){
    
    document.write(`<li>${meses[indice]} </li>`)

}
document.write(` </ul>`)