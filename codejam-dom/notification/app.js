const strMas = ['Be Flexible. We always plan for delays and try not to get upset when things inevitably go wrong.',
	'Always Buy Travel Insurance. A medical emergency can wipe out your savings — or even worse.',
	'Keep an Open Mind. Don’t judge other customs. You are a visitor. Be respectful.',
	'Leave Room for Spontaneity. Unplanned moments while traveling can be the best memories.',
	'Let Someone at Home Know Your Plans. This is extremely important when traveling solo.',
	'Wear Sunscreen. It’s especially important in hot countries.',
];

function tipsFunc() {
	const notification = document.getElementsByClassName('notification')[0];
	const isChecked = document.getElementById('checkboxTips');
	//
	function closeNotif() {
		notification.classList.add('hidden');
		if (isChecked.checked) {
			localStorage.setItem('openNotification', 'false');
		}
	}
	//
	let count = 0;
	function createElement() {
		count += 1;
		const div = document.createElement('div');
		div.id = count;
		div.className = 'tip';
		return div;
	}
	//
	let i = 0;
	const tips = document.getElementById('tips');
	const notifTxt = document.getElementById('textNotification');
	notifTxt.innerHTML = strMas[i];
	//
	function leftSwipe() {
		if (i > 0) {
			i -= 1;
		} else {
			i = strMas.length - 1;
		}
		notifTxt.innerHTML = strMas[i];
		for (let j = 0; j < tips.childNodes.length; j += 1) {
			if (tips.childNodes[j].classList.contains('chosenTip')) {
				tips.childNodes[j].classList.remove('chosenTip');
			}
		}
		tips.childNodes[i].classList.add('chosenTip');
	}
	//
	function rightSwipe() {
		if (i >= tips.childNodes.length - 1) {
			i = 0;
		} else {
			i += 1;
		}
		notifTxt.innerHTML = strMas[i];
		for (let j = 0; j < tips.childNodes.length; j += 1) {
			if (tips.childNodes[j].classList.contains('chosenTip')) {
				tips.childNodes[j].classList.remove('chosenTip');
			}
		}
		tips.childNodes[i].classList.add('chosenTip');
	}
	//
	const open = localStorage.getItem('openNotification');
	if (open !== 'false') {
		notification.classList.remove('hidden');
		const exit = document.getElementsByClassName('closeNotification')[0];
		exit.addEventListener('click', closeNotif);
		//
		strMas.map(() => tips.appendChild(createElement()));
		tips.childNodes[0].classList.add('chosenTip');
		//
		const leftArrow = document.getElementsByClassName('left_arrow')[0];
		const rightArrow = document.getElementsByClassName('right_arrow')[0];
		//
		leftArrow.addEventListener('click', leftSwipe);
		rightArrow.addEventListener('click', rightSwipe);
	}
}

setTimeout(() => {
	tipsFunc();
}, 1000);
