
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Selectors assigned to variables
let inputColor, inputHeight, inputWeight, pixelCanvas, sizePicker;
inputColor = $("#colorPicker");
pixelCanvas = $("#pixelCanvas");

// Creation of grid

function makeGrid() {
  inputHeight = $("#inputHeight").val();
  inputWeight = $("#inputWeight").val();
  pixelCanvas.children().remove();
  for (let r = 0; r < inputHeight; r++) {
    pixelCanvas.append("<tr></tr>");
  }
  let gridRows = $("tr");
  for (let c = 0; c < inputWeight; c++) {
    gridRows.append("<td></td>");
  }

  let cell = pixelCanvas.find("td");

  // Code for color picker
  
   cell.click(function () {

    let color = $("#colorPicker").val();

    if ($(this).attr("bgcolor")) {
      $(this).removeAttr("bgcolor");
    } else {
      $(this).attr("bgcolor", color);
    }
  });

}

$("#sizePicker").submit(function (event) {
  event.preventDefault();
  makeGrid();
});
