//FUNCTION FOR BUILDING DIVS. GIVEN NUMBER. For statement up to number squared append div. 
function buildDivs(num){
    for (let i = 0; i < num; i++){
        
        const divRow = document.createElement('div');
        divRow.setAttribute('class', 'divRow');
        
        for (let x = 0; x< num; x++){
            const squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'gridDiv');
            squareDiv.style.height = 75/num + 'vh';
            squareDiv.style.width = 75/num + 'vh';
            
            squareDiv.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = '#453dbdff';
            });
            
            divRow.appendChild(squareDiv);
        }
        container.appendChild(divRow);
    
    }
}

const container = document.querySelector("#container");
buildDivs(16);

const sizeButton = document.querySelector('#changeSize');
sizeButton.addEventListener("click", ()=> {
const newNum = prompt("Enter number of squares per side (1 to 100)");
    if (newNum >=1 && newNum <=100){
        const rows = document.querySelectorAll(".divRow");
        rows.forEach((row) =>{
                container.removeChild(row);
        })
        buildDivs(newNum);
    }
    else{
        alert("Value entered outside of range.")
    }
    }
);

const colorButton = document.querySelector('#randomColor');
let colorOn = false;
const opacityButton = document.querySelector('#addOpacity');
let opacityOn = false;

function buttonToggle(filter){
    return !(filter);
}

colorButton.addEventListener("click", ()=> {
        console.log(colorOn);
        colorOn = buttonToggle(colorOn);
        console.log(colorOn);
        if (colorOn){
            console.log('Yes')
            colorButton.textContent = 'Random Color: On';
        }
        else{
            colorButton.textContent = 'Random Color: Off';
        }
    }
)

opacityButton.addEventListener("click", ()=> {
        console.log(opacityOn);
        opacityOn = buttonToggle(opacityOn);
        console.log(opacityOn);
        if (opacityOn){
            console.log('Yes')
            opacityButton.textContent = 'Opacity: On';
        }
        else{
            opacityButton.textContent = 'Opacity: Off';
        }
    }
)