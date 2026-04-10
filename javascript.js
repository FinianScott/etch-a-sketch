//FUNCTION FOR BUILDING DIVS. GIVEN NUMBER. For statement up to number squared append div. 
function buildDivs(num){
    for (let i = 0; i < num; i++){
        const container = document.querySelector("#container");
        const divRow = document.createElement('div');
        divRow.setAttribute('class', 'divRow');
        
        for (let x = 0; x< num; x++){
            const squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'gridDiv');
            squareDiv.style.height = 50/num + 'vh';
            squareDiv.style.width = 50/num + 'vh';
            divRow.appendChild(squareDiv);

            //eventually add listener for hover to function
        }
        container.appendChild(divRow);
    
    }
}


buildDivs(80);
//Set number to sixteen, then run function. eventually add listener here to update page if new number entered. 