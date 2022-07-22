let ciudades = [];

do{
    let city = prompt("Ingrese una ciudad");
   ciudades.push(city)

}while (confirm("¿Desea ingresar una ciudad?")){

    function ciudad (titulo){
        document.write(`<h3>`+titulo+`</h3>`)
        document.write(`<ul>`)
        for (let i = 0; i < ciudades.length; i++) {
            document.write(`<li>${ciudades[i]}</li>`)
              }
        document.write(`</ul>`)
    }
    
    ciudad ("Ciudades:")
    document.write(`<br> Longitud del arreglo: ${ciudades.length} `)
    
    document.write(`<br> Primera ciudad: ${ciudades[0]}<br/><br> Tercera ciudad: ${ciudades[2]}<br/><br> Ultima ciudad: ${ciudades[3]}<br/>`)
    ciudades.push("Paris")
    ciudad("Agrego paris en la ultima posicion")
    
    document.write(`<br> Segunda ciudad: ${ciudades[1]}<br/>`)
    
    ciudades[1] = "Barcelona"
    ciudad("Segunda ciudad sustituida por barcelona")
    

    

}


  