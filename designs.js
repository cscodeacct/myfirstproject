function makeGrid() {
	var height = document.getElementById('inputHeight').value;
	var width = document.getElementById('inputWeight').value;
	var table = document.getElementById('pixel_canvas');
	// Creating table grid
	table.innerHTML = '';
	var tbody = document.createElement('tbody');
	for (var i = 0; i < height; i++) {
		var tr = document.createElement('tr');
		for (var p = 0; p < width; p++) {
			var td = document.createElement('td');
			td.appendChild(document.createTextNode(''));
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

//jQuery code to change color of pixel 
$('body').on('click', 'td', function () {
	var color = document.getElementById('colorPicker').value;
	$(this).css('background-color', color);
});
