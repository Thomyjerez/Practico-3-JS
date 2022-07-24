let numero=parseInt(prompt("Ingrese el numero para mostrar su tabla de multiplicar"))
tabla(numero)

function tabla(numero){
    document.write(`<table>
    <thead>
        <tr>
            <th>Tabla de multiplicar</th>
        </tr>
    </thead>
    <tbody>`);

    for(let i=1; i<=10; i++){
        document.write(`
        <tr>
            <td>${numero} * ${i} </td>
            <td>${numero * i}</td>
        </tr>`);  
    }
    document.write(`</tbody> </table>`)
}






