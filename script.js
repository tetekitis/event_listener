document.getElementById('divId').addEventListener('mouseover', makeBoxGreen);

document.getElementById('divId').addEventListener('mouseleave', makeBoxRed);

document.getElementById('toggleButton').addEventListener('click', changeToggleButton);

function changeToggleButton(){
	let toggleButton = document.getElementById('toggleButton');
	if( toggleButton.value === 'ON' ){
		toggleButton.value = 'OFF';
		document.getElementById('divId').removeEventListener('mouseover', makeBoxGreen);
	}else{
		toggleButton.value = 'ON';
		document.getElementById('divId').addEventListener('mouseover', makeBoxGreen);
	}
}


function makeBoxGreen(){
	document.getElementById('divId').style.backgroundColor = 'green';
}

function makeBoxRed(){
	document.getElementById('divId').style.backgroundColor = 'red';
}
