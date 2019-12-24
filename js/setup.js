'use strict';

let d = document;





let similarListElement = d.querySelector('.setup-similar-list');
let similarWizardTamplate = d.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let wizardNames = ['Иван-Хуан','Себастьян' ,'Мария' ,'Кристоф' ,'Виктор' ,'Юлия' ,'Люпита' ,'Вашингтон'];
let wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let wizardCoatColor = [
'rgb(101, 137, 164)',
'rgb(241, 43, 107)',
'rgb(146, 100, 161)',
'rgb(56, 159, 117)',
'rgb(215, 210, 55)',
'rgb(0, 0, 0)',
];


let wizardEyesColor = ['red','blue' ,'yellow' ,'green','black'];

let fireballColor = ['#30a8ee','#5ce6c0' ,'#e848d5' ,'#e6e848','#ee4830'];

let wizards = [
{
	name: wizardNames[random(0, wizardNames.length - 1)],
	lastname: wizardLastnames[random(0, wizardLastnames.length - 1)],
	coatColor: wizardCoatColor[random(0, wizardCoatColor.length - 1)],
	eyesColor:  wizardEyesColor[random(0, wizardEyesColor.length - 1)],
},
{
	name: wizardNames[random(0, wizardNames.length - 1)],
	lastname: wizardLastnames[random(0, wizardLastnames.length - 1)],
	coatColor: wizardCoatColor[random(0, wizardCoatColor.length - 1)],
	eyesColor:  wizardEyesColor[random(0, wizardEyesColor.length - 1)],
},
{
	name: wizardNames[random(0, wizardNames.length - 1)],
	lastname: wizardLastnames[random(0, wizardLastnames.length - 1)],
	coatColor: wizardCoatColor[random(0, wizardCoatColor.length - 1)],
	eyesColor:  wizardEyesColor[random(0, wizardEyesColor.length - 1)],
},
{
	name: wizardNames[random(0, wizardNames.length - 1)],
	lastname: wizardLastnames[random(0, wizardLastnames.length - 1)],
	coatColor: wizardCoatColor[random(0, wizardCoatColor.length - 1)],
	eyesColor: wizardEyesColor[random(0, wizardEyesColor.length - 1)], 
},
];


function random(min, max) {
  return Math.round((min - 0.5) + Math.random() * ((max + 0.5)- min));
}


function renderWizard(wizard) {
	
	let newWizard = similarWizardTamplate.cloneNode(true);
	newWizard.querySelector('.setup-similar-label').textContent = wizard.name + ' ' +  wizard.lastname;
	newWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	newWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return newWizard;
}

function renderWizardsList() {
	for (let i = 0; i < wizards.length; i++) {
		similarListElement.appendChild(renderWizard(wizards[i]));
	}
	d.querySelector('.setup-similar').classList.remove('hidden');
}

renderWizardsList();


// обработчики событий


// *** вид формы ректирования персонажа 

let setupOpenButton = d.querySelector('.setup-open-icon');
let setupField = d.querySelector('.setup');
let setupCloseButton = d.querySelector('.setup-close');

let openPopup = function () {
	setupField.classList.remove('hidden');
	d.addEventListener('keyup', onPopupEscPress);
};

let closePopup = function () {
	setupField.classList.add('hidden');
	d.removeEventListener('keyup', onPopupEscPress)
};

let onPopupEscPress = function (evt) {
	if (evt.code === 'Escape') {
		closePopup()
	}
};

// открытие попапа
setupOpenButton.addEventListener('click', function () {
	openPopup();
});

setupOpenButton.addEventListener('keyup', function (evt) {

	if (evt.code === 'Enter') {
		openPopup();
	}
});


// закрытие попапа
setupCloseButton.addEventListener('click', function () {
	closePopup();
});

setupCloseButton.addEventListener('keyup', function (evt) {

	if (evt.code === 'Enter') {
		closePopup();
	}
});

// ***

// редактирование персонажа
let wizardCoat = setupField.querySelector('.wizard-coat');
let wizardEyes = setupField.querySelector('.wizard-eyes');
let fireball = setupField.querySelector('.setup-fireball-wrap');


wizardCoat.addEventListener("click", changeCoatColor);
let coatNum = 0;
function changeCoatColor() {

	wizardCoat.style.fill = wizardCoatColor[coatNum];
	coatNum++;
	if(coatNum === wizardCoatColor.length){
		coatNum = 0;
	}
}

wizardEyes.addEventListener("click", changeEyesColor);
let eyesNum = 0;
function changeEyesColor() {
	wizardEyes.style.fill = wizardEyesColor[eyesNum];
	eyesNum++;
	if(eyesNum === wizardCoatColor.length){
		eyesNum = 0;
	}
}



fireball.addEventListener("click", changeFireballColor);
let fireballNum = 0;
function changeFireballColor() {
	fireball.style.background = fireballColor[fireballNum];
	fireballNum++;
	if(fireballNum === fireballColor.length){
		fireballNum = 0;
	}
}