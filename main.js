// >> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador.

/* Armar la estructura HTML del proyecto.
Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones.*/


let productos = [
	'Carta Natal',
	'"Tarot"',
	'Rueda Atrologica',
	'Lectura de Parejas',
	'Revolucion Sola',
];

let precioRandom = Math.trunc(Math.random() * 10000);
let iva = 1.25;

saludo(productos);

let numero = parseInt(
	prompt('Gracias por ingresar a Astral affair, ingresa el codigo del producto:')
);
while (isNaN(numero) || numero > 6 || numero < 1) {
	numero = parseInt(prompt('Error! Ingresa otro codigo:'));
}

alert(`El producto n° ${numero} es ` + productos[numero - 1]);

alert('El precio del servicio es: ' + precioRandom);
let respuesta = prompt(
	'Si lo quiere pagar en cuotas por favor ingresa si o no'

).toLowerCase();

while (
	typeof respuesta != 'string' &&
	(respuesta != 'si' || respuesta != 'no')
) {
	respuesta = prompt(
		'Error, por favor ingresa la respuesta nuevamente:'
	).toLowerCase();
}

if (respuesta === 'si') {
	let cantCuotas = prompt('Perfecto ahora indicanos la cantidad de cuotas: ', '3, 6 o 12');
	while (
		isNaN(cantCuotas) ||
		cantCuotas % 3 != 0 ||
		cantCuotas > 12 ||
		cantCuotas < 3
	) {
		cantCuotas = prompt('Error, por favor ingrese correctamente: ', '3, 6 o 12');
	}
	alert(
		'La cantidad de ' +
			cantCuotas +
			' cuotas.' +
			' Tu precio por cuota va a ser: ' +
			Math.trunc(calculadorCuotas(precioRandom, cantCuotas))
	);
} else {
	
	alert(
		'El precio final de: "' +
			productos[numero - 1] +
			'" es: ' +
			Math.trunc(calcImpuesto(precioRandom, iva))
	);
}

function saludo(numero) {
	alert(
		'Gracias por interesarte en nuestros servicios de Tarot.'
	);
	alert(
		'Por favor ingresa el codigo del producto a comprar' +
			`Numero del 1 al ${numero.length}. ` 
	);
}

function calcImpuesto(subtotal, iva) {
	return subtotal * iva;
}

function calculadorCuotas(numero, cantidad) {
	return numero / cantidad;
}