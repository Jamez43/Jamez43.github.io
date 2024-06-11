let cells = [];


createGrid = (cellsNumber) => {
    let gridDiv = document.getElementById('gridContainer');
    let viewPortHeight = document.documentElement.clientHeight;
    let viewPortWidth = document.documentElement.clientWidth;
    //make cellsNumber rows in block display
    gridDiv.style.width = (viewPortHeight / 1.25) + "px";
    gridDiv.style.height = (viewPortHeight / 1.25) + "px";
    let containerDiv = document.createElement('div');
    containerDiv.id = "containerDiv";
    containerDiv.style.width = (viewPortHeight / 1.25) + "px";
    containerDiv.style.height = (viewPortHeight / 1.25) + "px";
    gridDiv.appendChild(containerDiv);
    for (let j = 0; j < cellsNumber; j++) {
        let rowDiv = document.createElement('div');
        rowDiv.id = "rowDiv";
        rowDiv.style.height = (viewPortHeight / (cellsNumber * 1.25)) + "px";
        rowDiv.style.width = (viewPortHeight / 1.25) + "px";

        containerDiv.appendChild(rowDiv);
        // split rowDiv into 16 using flex display
        
        for (let i = 0; i< cellsNumber; i++){
            let div = document.createElement('div');
            cells.push(div);
            div.addEventListener('mouseover', function(){div.style.backgroundColor = 'grey'});
            div.id = "cell";
            let height = parseFloat(gridDiv.style.height) / cellsNumber;
            div.style.width = height + "px";
            div.style.height = height + "px";

            rowDiv.appendChild(div);
        }
            
    }
    console.log(viewPortHeight/2);
};

resetGrid = () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    })
};

changeSize = () => {
    let size = Number(prompt("Enter the size of the grid"));

    document.getElementById('containerDiv').remove();

    cells = [];

    createGrid(size);
}


createGrid(16);