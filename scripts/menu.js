const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const myBtn = document.querySelector("#darkBtn");
const main = document.querySelector("main");

myBtn.addEventListener('click', () => {
	main.classList.toggle('dark');

});
