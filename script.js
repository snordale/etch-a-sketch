let body = document.querySelector('body');
body.style.margin = '0px';
body.style.padding = '0px';

let grid = document.createElement('div');
grid.className = 'grid';
grid.style.margin = '40px';


grid.style.clear = 'both';
let dim = 400;


function createTable(x) {
	grid.innerHTML = '';


	for (r = 0; r < x; r++) {
		let height = dim/x;
		console.log(height);
		let row = document.createElement('div');
		row.className = 'row';
		row.style.width = `${dim}px`;
		row.style.height = `${height}px`;
		row.style.padding = `0px`;
		row.style.margin = '0px';

		for (i = 0; i < x; i++) {
			let cell = document.createElement('div');
			let width = (dim/x) - 2;
			cell.className = 'box';
			cell.style.width = `${width}px`;
			cell.style.height = `${width}px`;
			cell.style.display = 'inline-block';
			cell.style.border = '1px grey solid';

			row.appendChild(cell);
		}

		grid.appendChild(row);
	}

	body.appendChild(grid);


	let boxs = document.querySelectorAll('.box');
	boxs.forEach((box) => {
	
	box.addEventListener('mouseover', (e) => {
		box.classList.add('hover');

	});
	// box.addEventListener('mouseout', (e) => {
	// 	box.classList.remove('hover');


	// });
});

}




let buttonWrap = document.createElement('div');
buttonWrap.className = 'buttonWrap';
buttonWrap.setAttribute('style', 'padding: 50px 20px 5px 20px');


let clearButton = document.createElement('button');
buttonWrap.appendChild(clearButton);


clearButton.className = 'btn';

clearButton.innerHTML = 'clear';
clearButton.style.padding = '4px';
clearButton.style.display = 'inline-block';

clearButton.setAttribute('style', 'padding: 4px 20px 4px 20px');

	clearButton.addEventListener('click', (e) => {
		let input = prompt("X by X pixels:");
		
		if (input != null) {
			console.log(input);
			createTable(input);
		}

});
body.appendChild(buttonWrap);
	createTable(4);

