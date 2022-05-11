//Use sctrict
"use strict";
//defines constant reference value
//Tabble element
const $tableElement = $('#pixelCanvas');
//input height
const $inputHeight = $('#inputHeight');
//input width
const $inputWidth = $('#inputWidth');
//color picker
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();
//Clear
    $tableElement.html('');
//make the grid with height and width
    makeGrid(height, width);
    addCellClickListener();
});
//Use the for loop to create the height and width
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        //Create table row
        $tableElement.append('<tr></tr>');
    };
//Create table data by appending the color
    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};
//Adding the click listener for the color picker
function addCellClickListener() {
    //The table data
    $('td').click( event => {
        //let the color picker pass an array of color values. 
        let color = $colorPicker.val();
        //Let the color happen with the css making the background color
        $(event.currentTarget).css("background-color", color)
    });
};
