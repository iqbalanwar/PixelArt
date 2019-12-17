document.querySelector('#set-color').addEventListener('click', changeColor);
function changeColor(event) {
    let color = document.querySelector('#color-field').value;
    document.querySelector('.brush').style.background = color;
    color = " ";
    console.log(color);
    // document.querySelector('form').reset();
    
    event.preventDefault();
}

function squareDivs(event) {
    for (let i = 1; i <= 8000; i++) {
        let square = document.createElement('div');
        square.className += "square";
        square.addEventListener('mouseover',changeSquareColor);
        document.querySelector('body').appendChild(square);
    }
}
squareDivs();
function changeSquareColor(event) {
    let color = document.querySelector('#color-field').value;
    this.style.background = color;
    event.preventDefault();
}

/*===== BONUS: COLOR SWATCH =====*/

// CREATE THE SWATCHES
function colorSwatch() {
    for (let i = 1; i <= 3; i++) {
        let swatch = document.createElement('div');
        swatch.className = "swatch";
        swatch.style.height = "60px";
        swatch.style.width = "60px";
        swatch.style.margin = "10px";
        swatch.style.display = "inline-block";
        swatch.style.backgroundColor = "tan";
        document.querySelector('.controls').appendChild(swatch);
    }
}
colorSwatch();

// SETS THE COLOR OF THE SWATCHES TO THE LAST THREE
document.querySelector('#set-color').addEventListener('click',lastThreeColors);
let arrayColors = ['tan','tan','tan'];
function lastThreeColors(event) {
    arrayColors.push(document.querySelector('#color-field').value);
    arrayColors.shift();

    document.querySelectorAll('.swatch')[0].style.background = arrayColors[0];
    document.querySelectorAll('.swatch')[1].style.background = arrayColors[1];
    document.querySelectorAll('.swatch')[2].style.background = arrayColors[2];

    event.preventDefault();
}

// CHANGES THE COLOR WHEN CLICKING ON THE OLD ONES
let prevColors = document.querySelectorAll('.swatch');
for (let i=0; i < prevColors.length; i++) {
    prevColors[i].addEventListener('click', changeBackToThis);
}
function changeBackToThis(event) {
    // WHEN YOU CLICK ON A COLOR, IT PUTS IT IN THE COLOR FIELD
    let currentColor = document.querySelector('#color-field');
    currentColor.value = this.style.backgroundColor;

    // YOU RESET YOUR BRUSH TO THAT GIVEN COLOR
    let resetBrush = document.querySelector(".brush");
    resetBrush.style.backgroundColor = currentColor.value;

    event.preventDefault();
}