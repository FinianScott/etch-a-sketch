//FUNCTION FOR BUILDING DIVS. GIVEN NUMBER. For statement up to number squared append div. 
function buildDivs(num){
    for (let i = 0; i <= num * num; i++){
        const container = document.querySelector("#container");
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'gridDiv');
        console.log(`im div${i}`)
        container.appendChild(squareDiv);
    
        //eventually add listener for hover to function
    }
}


buildDivs(16);
//Set number to sixteen, then run function. eventually add listener here to update page if new number entered. 