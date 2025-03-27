let tile_number = 16;
const grid = document.querySelector('.container')
const button = document.querySelector('button')
const random = function (){
    return Math.floor(Math.random() * 257)
}
const change_size = function (){
    let max_grid_size = 100
    let input = Number(prompt('Put a digit for a n by n grid, max = 100'));
    if (!isNaN(input) && input <=  max_grid_size && input > 0){
        let tile_number = input;
        grid.textContent = '';
        createGrid(tile_number)
    }
    else{
        alert('Must be a number and not less than 1 or greater than ')
    }
}


const createGrid = function (tile_number = 16){
    for(let i = 0; i<tile_number; i++){
      const column_div = document.createElement('div') 
      column_div.classList.add('column')
      
        for(let i = 0; i<(tile_number);i++){
            const div = document.createElement('div')
            div.addEventListener('mouseenter', () => {
                if (div.style.backgroundColor){div.style.opacity  = Number(div.style.opacity) + 0.1;}
                else {div.style.cssText = `background-color: rgb(${random()}, ${random()}, ${random()}); opacity: 0.1;`}
            })
            column_div.appendChild(div)
        }
        grid.appendChild(column_div)
    }
}

button.addEventListener('click', change_size)
createGrid()