const colorPicker = document.getElementById('color');
const pallette = document.getElementById('color-list');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let brushColor;
let isMouseDown = false;

const uncheckColor = ()=>{
    let checkedColor = pallette.getElementsByClassName('clicked')[0];
    if (checkedColor) 
        checkedColor.className = 'color-item'
    return checkedColor
}

colorPicker.addEventListener('change', (event) => {
    uncheckColor()
	let newColorElement = document.createElement('div');
	newColorElement.className = 'color-item clicked';
	newColorElement.style.backgroundColor = event.target.value;
    brushColor = event.target.value;
	newColorElement.addEventListener('click', (event) => {
        if (event.target !== uncheckColor()){
            event.target.className = 'color-item clicked';
		    brushColor = event.target.style.backgroundColor;
        }      
	})
	pallette.prepend(newColorElement)
});

canvas.addEventListener('mousedown', ()=>{
    isMouseDown = true;
});

canvas.addEventListener('mousemove', (e)=>{
    if (isMouseDown && e.which == 1) {
        if (!brushColor){
            alert('Сперва выбери цвет!');
            return;
        }
            
        context.fillStyle = brushColor;
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, 5, 0, Math.PI*2);
        context.fill();
    }
})
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

canvas.addEventListener('mouseleave', () => {
    isMouseDown = false;
});