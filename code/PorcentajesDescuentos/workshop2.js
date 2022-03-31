
function calculateDiscount(price, discount){
    const finalPricePercentage = 100 - discount;
    const total = ((price*finalPricePercentage)/100);
    return total;
}
function onClickCalculateDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const price = Number.parseFloat(inputPrice.value);
    
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = Number.parseFloat(inputDiscount.value);
    
    const total = calculateDiscount(price, discount);

    const displayResult = document.getElementById("displayResult");
    displayResult.innerText = "Precio con descuento: " + total;
}