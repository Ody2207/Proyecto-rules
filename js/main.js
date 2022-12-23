// Creacion de contratos
const listContratos = [];
listContratos.push({
	name: 'Ejemplo numero uno',
	date: '22/07/2022-22/07/2023',
	price: 1000000
});
listContratos.push({
	name: 'Ejemplo numero dos',
	date: '22/07/2022-22/07/2023',
	price: 1500000
});
listContratos.push({
	name: 'Ejemplo numero tres',
	date: '22/07/2022-22/07/2023',
	price: 230000
});
listContratos.push({
	name: 'Ejemplo numero tres',
	date: '22/07/2022-22/07/2023',
	price: 230000
});
listContratos.push({
	name: 'Ejemplo numero tres',
	date: '22/07/2022-22/07/2023',
	price: 230000
});
listContratos.push({
	name: 'Ejemplo numero tres',
	date: '22/07/2022-22/07/2023',
	price: 230000
});
listContratos.push({
	name: 'Ejemplo numero tres',
	date: '22/07/2022-22/07/2023',
	price: 230000
});

/* 
<div class="contrato-container">
	<a class="item contrato-name" href="">Ejemplo número uno</a>
	<p class="item contrato-date">22/07/2022-22/07/2023</p>
	<p class="item contrato-Valor">$1,000,000</p>

	<div class="estado">
		<img class="circle" src="./recursos/svg/circle-green.svg" alt="">
		<p>Activo</p>
		<img class="arrow" src="./recursos/svg/arrow-bottom.svg" alt="">

		<img class="estado__configuraciones"  title="Configuraciones" src="./recursos/svg/dots-vertical.svg" alt="">
	</div>
</div> 
*/

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
				parrafoEstado.innerHTML = 'Activo';

				const imagenArrow = document.createElement('img');
				imagenArrow.classList.add('arrow');
				imagenArrow.setAttribute('src', '../recursos/svg/arrow-bottom.svg');


				const imgEstadoConfi = document.createElement('img');
				imgEstadoConfi.classList.add('estado__configuraciones');
				imgEstadoConfi.setAttribute('src', '../recursos/svg/dots-vertical.svg');

				estado.appendChild(imagenCircle);
				estado.appendChild(parrafoEstado);
				estado.appendChild(imagenArrow);
				estado.appendChild(imgEstadoConfi);
				

			contratoContainer.appendChild(estado);
		
		contenedorListContratos.append(contratoContainer);
		
	};
};

renderListContratos(listContratos);

console.log('hola')