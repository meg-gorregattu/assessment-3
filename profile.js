function myFavColor() {
	alert('My favorite color is black.');
}

function myFavPlace() {
    alert('My favorite place is anywhere that is with my family and boyfriend.')
}

function myFavRitual() {
    alert('My favorite ritual is making myself coffee in the morning or doing my nighttime skincare routine.')
}

let color = document.getElementById('color');
let place = document.getElementById('place');
let ritual = document.getElementById('ritual');

color.addEventListener('click', myFavColor);
place.addEventListener('click', myFavPlace);
ritual.addEventListener('click', myFavRitual);

