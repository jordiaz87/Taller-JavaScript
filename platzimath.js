function esPar (lista) {
    return !(lista.length % 2);
}

// otra opcion
// function esImpar (lista) {
//     return lista.length % 2;
// }

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {

    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar)
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}


function calcularPromedio(lista) {



    const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    
    const sumaLista = lista.reduce(sumarTodosElementos);



    const promedio = sumaLista / lista.length;

    console.log(promedio);
    return promedio
}