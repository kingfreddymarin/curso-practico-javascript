const precio = 1786.99;
const descuento = 85.00;
const total = ((descuento*precio)/100);

function calculateDiscount(precio, descuento){
    const total = ((precio*(100-descuento))/100)
    return total;
}

console.log(total);