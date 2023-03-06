let grid = document.getElementById('grid');
let colorPicker = document.getElementById("myColorPicker");
let selectedColor = colorPicker.value;
colorPicker.addEventListener("input", function() {
    selectedColor = colorPicker.value;
  });

console.log(selectedColor)

let theButton = document.getElementById('newbtn');
theButton.addEventListener('click', createNew);



function createNew(){
    document.querySelectorAll(".square").forEach(el => el.remove());
    let buttonNew = prompt('How many squares');
    grid.style.gridTemplateColumns = `repeat(${buttonNew}, 40px)`
    grid.style.gridTemplateRows = `repeat(${buttonNew}, 40px)`
    for (let i = 0; i < buttonNew*buttonNew; i++) {
    let square = document.createElement('div');
    square.textContent = '';
    
    square.addEventListener('mouseover', 
    e => square.style.backgroundColor = selectedColor)
    square.classList.add('square');
    grid.appendChild(square);
    }
}




window.onload = createNew;
