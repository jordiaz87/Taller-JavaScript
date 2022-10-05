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


        // const indexMitad1ListaPar = (lista.length / 2) -1;
        // const indexMitad2ListaPar = lista.length / 2;

        const indexMitad1ListaPar = (lista.length / 2) -1;
        const indexMitad2ListaPar = lista.length / 2;



        // const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);;
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;

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

    // console.log(promedio);
    return promedio
}