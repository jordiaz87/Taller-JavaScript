const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCupon = document.querySelector('#cupon')
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P*(100-D))/100

    const price = inputPrice.value;
    const cupon  = inputCupon.value;

    if (!price || !cupon) {
        pResult.innerHTML= 'Por favor ingresa los valores ';
        return;
    };

    let discount;

    switch (cupon) {
        case 'elmejor':
            discount = 30;
            break;

        case 'elmasretador':
            discount = 25;
            break;
    
        default:
            pResult.innerHTML= 'El cupon no es valido';
            return;
            break;
    }

    // if (cupon == 'elmejor') {
    //     discount = 30;
    // } else if (cupon == 'elmasretador') {
    //     discount = 25;
    // } else {
    //     pResult.innerHTML= 'El cupon no es valido';
    //     return;
    // }


   



    const newPrice = ( price * (100 - discount)) /100;

    pResult.innerHTML= 'El nuevo precio con descuento es $' + newPrice;

    

    
}

