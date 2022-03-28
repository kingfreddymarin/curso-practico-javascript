// CODIGO DEL CUADRADO 
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

// CODIGO DEL TRIANGULO
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
}

//Codigo del circulo
const PI = Math.PI;

function diametroCirculo (radio){
    return (radio * 2);
}
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo (radio){
    return (radio * radio) * PI;
}
//Interaccion con HTML  
//Square functions
function calculatePerimeterSquare(){
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const perimeter = perimetroCuadrado(value);
    alert(perimeter);
}
function calculateAreaSquare(){
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
//triangle functions
function calculatePerimeterTriangle(){
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const base = document.getElementById("base");
    const a = Number.parseFloat(left.value);
    const b = Number.parseFloat(right.value);
    const c = Number.parseFloat(base.value)

    const perimeter = perimetroTriangulo(a, b, c);
    alert(perimeter);
}
function calculateAreaTriangle(){
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const base = document.getElementById("base");
    const a = Number.parseFloat(left.value);
    const b = Number.parseFloat(right.value);
    const c = Number.parseFloat(base.value)
    
    if (a != b){
        alert("No es un triangulo isoceles");
    }else{
        //spliting triangle in half
        let miniA;
        const miniB = c/2;
        const miniC = b;
    
        //Turning values into square
        const sqMiniB = miniB * miniB;
        const sqMiniC = miniC * miniC;
        const sqMiniA = sqMiniC - sqMiniB;
        miniA = Math.sqrt(sqMiniA);
    
        //Height equals 
        const height = miniA;
        const area = areaTriangulo(c, height);
        alert(area);
    }
}