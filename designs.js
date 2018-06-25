var button, colorPicker;

button = $("#button");
colorPicker = $("#colorPicker");

//Calling of makeGrid function
button.click(function (x) {
	
	$("tbody").remove();
	colorPicker.val("#000000");
	makeGrid();
	x.preventDefault();
});
//Grid creation for coloring the cells
function makeGrid() {
	 // deifnition of input values
	var y = $("#inputHeight").val();
	var z = $("#inputWeight").val();
//Rows creation
		for (var i = 1; i <= y; i++) {
		const tr = $("<tr></tr>");
		$("table").append(tr);
//Cells creation 
		var p = 1;
		while (p <= z) {
			const td = $("<td></td>");
			tr.append(td);
			p++;
//coloring of cells after clicking
				$("td").click(function () {
				$(this).css("background-color", colorPicker.val());
			});
		}
	}
}
