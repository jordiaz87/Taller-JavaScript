function calcularPromedio(lista) {

    // let sumaLista = 0;

    // for (let i=0; i < lista.length; i++) {
    //     sumaLista = sumaLista +  lista[i];
    // }

    // function sumarTodosElementos(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // }


    const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    
    const sumaLista = lista.reduce(sumarTodosElementos);



    const promedio = sumaLista / lista.length;

    console.log(promedio);
    return promedio
}