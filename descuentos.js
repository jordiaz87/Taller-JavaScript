const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount')
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P*(100-D))/100

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    console.log({ price, discount});

    if (!price || !discount) {
        pResult.innerHTML= 'Por favor ingresa los valores ';
        return;
    } 

    if (discount > 100) {
        pResult.innerHTML= 'El descuento no puede ser mayor a 100';
        return;
    } 



    const newPrice = ( price * (100 - discount)) /100;

    pResult.innerHTML= 'El nuevo precio con descuento es $' + newPrice;

    

    
}

