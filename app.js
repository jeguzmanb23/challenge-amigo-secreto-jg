let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
        
        // Validación de nombre vacío o numérico.
        if (amigo.trim() === "" || !isNaN(amigo)) {

            alert(`${(amigo.trim() === "") ? "Nombre de amig@ no válid@ (no se permite ingresar información vacía como un nombre)." : `${(!isNaN(amigo)) ? `Nombre de amig@ no válid@ (no se permite ingresar números como un nombre).` : ""}`}`);
            limpiarCaja();
            return;
        }
        // Validación de nombre repetido.
        if (listaAmigos.includes(amigo.trim())) {

            alert("El amig@ ya está en la lista.");
            limpiarCaja();
            return;
        }
    //Agregar nombre a la lista de amigos.    
    listaAmigos.push(amigo);
    console.log(listaAmigos);

    // Limpiar la caja de texto ingresado previamente.
    limpiarCaja();

    //Mostrar la lista de amigos en el HTML.
    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);

return;
}

function limpiarCaja() {
   document.querySelector('#amigo').value = "";
    return;
}

function sortearAmigo() {
    //Verificar que haya al menos 3 amigos en la lista.
    if (listaAmigos.length < 3) {
        alert("Debe haber al menos 3 amig@s en la lista para realizar el sorteo.");
        return;
    }
    //Realizar el sorteo.
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    console.log(`Amigo sorteado: ${amigoSorteado}`);
    
    //Mostrar el resultado en el HTML.
    let ulResultado = document.getElementById("resultado");

    // Limpiar resultados anteriores.
    ulResultado.innerHTML = "";

    // Crear un nuevo elemento li para el resultado.
    let liResultado = document.createElement("li");
    liResultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;

    //Agregar el li al ul de resultados.
    ulResultado.appendChild(liResultado);

}
