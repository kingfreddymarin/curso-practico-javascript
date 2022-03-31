const coupons = ["AXISXD01", "AXISXD02", "AXISXD03"];
/*for (i = 0; i <coupons.length;i++) {
    document.getElementById("coupons").innerText = coupons[i]
}*/
let txt = "";
coupons.forEach(countfunction)
document.getElementById("coupons").innerHTML = txt;
function countfunction(value, index, array){
    txt += value + "<br>";
}
function calculateDiscount(price, discount){
    const finalPricePercentage = 100 - discount;
    const total = ((price*finalPricePercentage)/100);
    return total;
}

function onClickCalculateDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const price = Number.parseFloat(inputPrice.value);
    //traemos los cupones declarados en el scope global
    const inputCoupon = document.getElementById("inputCoupon");
    const coupon = inputCoupon.value;

    if(coupon == coupons[0]){
        const discount = 50;
        const total = calculateDiscount(price, discount);
        const displayResult = document.getElementById("displayResult");
        displayResult.innerText = "Precio con descuento: " + total;
    } else if (coupon == coupons[1]){
        const discount = 25;
        const total = calculateDiscount(price, discount);
        const displayResult = document.getElementById("displayResult");
        displayResult.innerText = "Precio con descuento: " + total;
    }else if (coupon == coupons[2]){
        const discount = 15;
        const total = calculateDiscount(price, discount);
        const displayResult = document.getElementById("displayResult");
        displayResult.innerText = "Precio con descuento: " + total;
    }else{
        alert("Insert a valid coupon...");
    }    
}