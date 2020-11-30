document.getElementById('button').addEventListener('click', loadData);

function loadData() {
	// Create an XHR Object
	const xhr = new XMLHttpRequest();

	// OPEN (-property)
    // xhr.open(type of request, file, true);
	xhr.open('GET', 'data.txt', true);

	xhr.onprogress = function(){
		console.log('READYSTATE', xhr.readyState);
	}


	
	xhr.onload = function() {
		console.log('READYSTATE', xhr.readyState);
		if (this.status === 200) {
			// console.log(this.responseText);
			document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
		}
	}


	// old style
	// xhr.onreadystatechange = function(){
	// 	console.log('READYSTATE', xhr.readyState);
	// 	if(this.status === 200 && this.readyState === 4){
	// 		console.log(this.responseText);

	// 	}
	// }

	xhr.onerror = function() {
		console.log('Request error');
	}

	xhr.send();

}