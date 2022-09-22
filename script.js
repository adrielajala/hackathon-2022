window.onload = () => {
	let hotel1 = document.getElementById('hotel1');
	let hotel2 = document.getElementById('hotel2');
	let hotel3 = document.getElementById('hotel3');
	let h1 = document.getElementById('hoteltxt');
	let btnHotel = document.getElementById('btn-hotel');

	let univ1 = document.getElementById('univ1');
	let univ2 = document.getElementById('univ2');
	let univ3 = document.getElementById('univ3');
	let h2 = document.getElementById('univtxt');
	let btnUniv = document.getElementById('btn-univ');

	hotel1.style.borderBottomColor = '#fff';

	/* 	border-color: rgba(0, 0, 0, 0.2); */

	btnHotel.addEventListener('mousedown', () => {
		/*univ1.style.display = 'none';
		univ2.style.display = 'none';
		univ3.style.display = 'none';
		h2.style.display = 'none';



		hotel1.style.visibility = 'visible';
		hotel2.style.visibility = 'visible';
		hotel3.style.visibility = 'visible';
		h1.style.visibility = 'visible'; */

		hotel1.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
		hotel2.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
		hotel3.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';

		h1.innerHTML = 'Hotéis';
		hotel1.innerHTML = 'Hotel 1 <br> Endereço: X <br> Adequado para: Cegos e Surdos <br> <br> <button> Reservar </button>';
		hotel2.innerHTML = 'Hotel 2 <br> Endereço: Y <br> Adequado para: Cegos <br> <br> <button> Reservar </button>';
		hotel3.innerHTML = 'Hotel 3 <br> Endereço: Z <br> Adequado para: Surdos <br> <br> <button> Reservar </button>';


	});

	btnUniv.addEventListener('mousedown', () => {
		hotel1.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
		hotel2.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
		hotel3.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';

		h1.innerHTML = 'Universidades';
		hotel1.innerHTML = 'Universidade 1 <br> Endereço: X <br> Adequado para: Cegos e Surdos <br> <br> <button> Reservar </button>';
		hotel2.innerHTML = 'Universidade 2 <br> Endereço: Y <br> Adequado para: Surdos <br> <br> <button> Reservar </button>';
		hotel3.innerHTML = 'Universidade 3 <br> Endereço: Z <br> Adequado para: Cegos <br> <br> <button> Reservar </button>';
	});
}