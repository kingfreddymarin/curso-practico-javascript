// CODIGO DEL CUADRADO 

// Definimos las formulas para el calculo del perimetro y area de un cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " centimetros" );
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es de " + perimetroCuadrado + " centimetros" );
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es de " + areaCuadrado + " centimetros cuadrados" );

console.groupEnd();


// CODIGO DEL TRIANGULO
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 8;
const alturaTriangulo = 7.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = ( baseTriangulo * alturaTriangulo ) / 2;
console.log("Los lados del triangulo miden " + ladoTriangulo1 + " cm, ",  ladoTriangulo2 + " cm, ", baseTriangulo + " cm siendo estos el lado 1, lado 2 y la base respectivamente" );
console.log("la altura del triangulo es "+alturaTriangulo+" cm");
console.log("El perimetro del triangulo mide "+perimetroTriangulo+" cm y el area es de "+areaTriangulo+" cm Cuadrados")

console.groupEnd();

