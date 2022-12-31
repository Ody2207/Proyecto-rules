// Creacion de contratos
const listContratos = [];
listContratos.push({
	id: 1234,
	name: 'Ejemplo numero uno',
	date: '22/07/2022-22/07/2023',
	price: 1000000
});
// listContratos.push({
// 	id: 5678,
// 	name: 'Ejemplo numero dos',
// 	date: '22/07/2022-22/07/2023',
// 	price: 1500000
// });
// listContratos.push({
// 	name: 'Ejemplo numero tres',
// 	date: '22/07/2022-22/07/2023',
// 	price: 230000
// });
// listContratos.push({
// 	name: 'Ejemplo numero tres',
// 	date: '22/07/2022-22/07/2023',
// 	price: 230000
// });
// listContratos.push({
// 	name: 'Ejemplo numero tres',
// 	date: '22/07/2022-22/07/2023',
// 	price: 230000
// });
// listContratos.push({
// 	name: 'Ejemplo numero tres',
// 	date: '22/07/2022-22/07/2023',
// 	price: 230000
// });
// listContratos.push({
// 	name: 'Ejemplo numero tres',
// 	date: '22/07/2022-22/07/2023',
// 	price: 230000
// });


const contenedorListContratos = document.querySelector('#conListContratos')

function renderListContratos (arr) {
	for (contratos of listContratos) {

		const contratoContainer = document.createElement('div');
		contratoContainer.classList.add('contrato-container');

		const contratoName = document.createElement('a');
		contratoName.classList.add('contrato-name');
		contratoName.classList.add('item');
		contratoName.innerHTML = contratos.name;

		const contratoDate = document.createElement('p');
		contratoDate.classList.add('contrato-date');
		contratoDate.classList.add('item');
		contratoDate.innerHTML = contratos.date;

		const contratoValor = document.createElement('p');
		contratoValor.classList.add('contrato-Valor');
		contratoValor.classList.add('item');
		contratoValor.innerHTML = '$' + contratos.price;

		contratoContainer.appendChild(contratoName);
		contratoContainer.appendChild(contratoDate);
		contratoContainer.appendChild(contratoValor);


		const estado = document.createElement('div');
		estado.classList.add('estado');

		const imagenCircle = document.createElement('img');
		imagenCircle.classList.add('circle');
		imagenCircle.setAttribute('src', '../recursos/svg/circle-green.svg');

		const parrafoEstado = document.createElement('p');
		parrafoEstado.classList.add('parrafo-estado-af');


		const imagenArrow = document.createElement('img');
		imagenArrow.classList.add('arrow-estado');
		imagenArrow.classList.add('arrow');
		imagenArrow.setAttribute('src', '../recursos/svg/arrow-bottom.svg');



		const asideCheck = document.createElement('aside');
		asideCheck.classList.add('con-estado');
		asideCheck.classList.add('inactive');

		const containerEstadosActivo = document.createElement('div')
		containerEstadosActivo.classList.add('container-estados');
		containerEstadosActivo.classList.add('con-estado__avtivo');

		const estadoCircleActivo = document.createElement('img');
		estadoCircleActivo.classList.add('estado-circle');
		estadoCircleActivo.classList.add('activo_circle');
		estadoCircleActivo.setAttribute('src', '../recursos/svg/circle-green.svg');

		const estadoParrafoActivo = document.createElement('p');
		estadoParrafoActivo.innerHTML = 'Activo';

		containerEstadosActivo.appendChild(estadoCircleActivo);
		containerEstadosActivo.appendChild(estadoParrafoActivo);

		const checksActivo = document.createElement('img');
		checksActivo.id = 'checkActivo'
		checksActivo.classList.add('check');
		checksActivo.classList.add('activo');

		const containerEstadoFinalizado = document.createElement('div')
		containerEstadoFinalizado.classList.add('container-estados');
		containerEstadoFinalizado.classList.add('con-estado__finalizado');

		const estadoCircleFinalizado = document.createElement('img');
		estadoCircleFinalizado.classList.add('estado-circle');
		estadoCircleFinalizado.classList.add('finalizado_circle');
		estadoCircleFinalizado.setAttribute('src', '../recursos/svg/circle-red.svg');

		const estadoParrafoFinalizado = document.createElement('p');
		estadoParrafoFinalizado.innerHTML = 'Finalizado';

		containerEstadoFinalizado.appendChild(estadoCircleFinalizado);
		containerEstadoFinalizado.appendChild(estadoParrafoFinalizado);

		const checkFinalizado = document.createElement('img');
		checkFinalizado.id = 'checkFinalizado'
		checkFinalizado.classList.add('check');

		asideCheck.appendChild(containerEstadosActivo);
		asideCheck.appendChild(checksActivo);
		asideCheck.appendChild(containerEstadoFinalizado);
		
		asideCheck.appendChild(checkFinalizado);
					
		estado.appendChild(imagenCircle);
		estado.appendChild(parrafoEstado);
		estado.appendChild(imagenArrow);
		estado.appendChild(asideCheck);
				
		const imgEstadoConfi = document.createElement('img');
		imgEstadoConfi.classList.add('estado__configuraciones');
		imgEstadoConfi.setAttribute('src', '../recursos/svg/dots-vertical.svg');

		contratoContainer.appendChild(estado);
		contratoContainer.appendChild(imgEstadoConfi);
		
		contenedorListContratos.append(contratoContainer);
		
	};
};

renderListContratos(listContratos);

// ------------------- Funciones de estado-check

const checkActivado = document.querySelector('#checkActivo');
const checkFinalizado = document.querySelector('#checkFinalizado');
const isActivo = document.querySelector('.activo');

// const circle red o green

const circleColor = document.querySelector('.circle');

const parrafoEstadoActivadoFinalizado = document.querySelector('.parrafo-estado-af');

// const arrow

const arrowEstados = document.querySelector('.arrow-estado');
const aside = document.querySelector('.con-estado');

// funciones 

checkActivado.setAttribute('src', '../recursos/svg/check-full.svg');
checkFinalizado.setAttribute('src', '../recursos/svg/check.svg');

checkFinalizado.addEventListener('click', checkActivadoYes);
checkActivado.addEventListener('click', checkFinalizadoYes);

circleColor.setAttribute('src', '../recursos/svg/circle-green.svg');

parrafoEstadoActivadoFinalizado.innerHTML = 'Activo';

function checkActivadoYes () {
	if (isActivo) {
		checkActivado.setAttribute('src', '../recursos/svg/check.svg');
		checkFinalizado.setAttribute('src', '../recursos/svg/check-full.svg');
		checkFinalizado.classList.add('activo');
		checkActivado.classList.remove('activo');

		// circle red
		circleColor.setAttribute('src', '../recursos/svg/circle-red.svg');
		parrafoEstadoActivadoFinalizado.innerHTML = 'Finalizado';
	}
};

function checkFinalizadoYes () {
	if (isActivo) {
		checkActivado.setAttribute('src', '../recursos/svg/check-full.svg');
		checkFinalizado.setAttribute('src', '../recursos/svg/check.svg');
		checkFinalizado.classList.remove('activo');
		checkActivado.classList.add('activo');

		// cicle green
		parrafoEstadoActivadoFinalizado.innerHTML = 'Activo';
		circleColor.setAttribute('src', '../recursos/svg/circle-green.svg');
	}
}

arrowEstados.addEventListener('click', () => {
	aside.classList.toggle('inactive');
});

// ------------ Boton exit-ppen PopUp
const btnAbrirPopUp = document.querySelector('.estado__configuraciones');
const btnCerrarPopUp = document.querySelector('.conf-exit');
const popUp = document.querySelector('.dialog-conf')

btnAbrirPopUp.addEventListener('click', abrirPopUp);
btnCerrarPopUp.addEventListener('click', cerrarPopUp);

function abrirPopUp () {
	popUp.classList.remove('inactive');
}

function cerrarPopUp () {
	popUp.classList.add('inactive');
}
