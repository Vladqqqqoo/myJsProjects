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
	const tips = document.getElementById('tips');
	const notifTxt = document.getElementById('textNotification');
	const exit = document.getElementsByClassName('closeNotification')[0];
	const leftArrow = document.getElementsByClassName('left_arrow')[0];
	const rightArrow = document.getElementsByClassName('right_arrow')[0];
	let count = 0;
	let i = 0;
	function closeNotif() {
		notification.classList.add('hidden');
		if (isChecked.checked) {
			localStorage.setItem('openNotification', 'false');
		}
	}
	function createElement() {
		count += 1;
		const div = document.createElement('div');
		div.id = count;
		div.className = 'tip';
		return div;
	}
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
	const open = localStorage.getItem('openNotification');
	if (open !== 'false') {
		notifTxt.innerHTML = strMas[i];
		strMas.map(() => tips.appendChild(createElement()));
		tips.childNodes[0].classList.add('chosenTip');
		notification.classList.remove('hidden');
		exit.addEventListener('click', closeNotif);
		leftArrow.addEventListener('click', leftSwipe);
		rightArrow.addEventListener('click', rightSwipe);
		tips.addEventListener('click', (element) => {
			const { target: currentElem } = element;
			if (currentElem !== document.getElementsByClassName('tips')[0]) {
				for (let j = 0; j < tips.children.length; j += 1) {
					if (tips.children[j] === currentElem) {
						i = j;
						notifTxt.innerHTML = strMas[i];
					}
					if (tips.children[j].classList.contains('chosenTip')) {
						tips.children[j].classList.remove('chosenTip');
					}
				}
				currentElem.classList.add('chosenTip');
			}
		});
		document.addEventListener('keydown', (event) => {
			if (event.keyCode === 39) {
				rightSwipe();
			}
			if (event.keyCode === 37) {
				leftSwipe();
			}
			if (event.keyCode === 27) {
				closeNotif();
			}
		});
	}
}

setTimeout(() => {
	tipsFunc();
}, 5000);
