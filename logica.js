import { matriz, color } from './vars.js'

function snake(grid,pos_snake){
	for(let p=0; p<pos_snake.length; p++){
		if(p===0) grid[pos_snake[p][0]][pos_snake[p][1]] = 2
		else if(p===1) grid[pos_snake[p][0]][pos_snake[p][1]] = 3
		else grid[pos_snake[p][0]][pos_snake[p][1]] = 4
	}
}


function direccion(e){
	if(e.key === 'ArrowLeft'){
		return 'left'
	}
	if(e.key === 'ArrowRight'){
		return 'right'
	}
	if(e.key === 'ArrowUp'){
		return 'up'
	}
	if(e.key === 'ArrowDown'){
		return 'down'
	}
}


function render(grid){
	const cuadricula = document.querySelector('#cuadricula')
	grid.map(row=>row.map(col=>{
		const div = document.createElement('div')
		const colorEnd = col === 0 ? div.classList.add(color.bg): col === 1 ? div.classList.add(color.eat): col === 2 ? div.classList.add(color.snake.n1): col === 3 ? div.classList.add(color.snake.n2):div.classList.add(color.snake.n)
		div.classList.add(colorEnd,'flex','items-center','justify-center')
		//div.innerText = col
		cuadricula.appendChild(div)
	}))
}


function moveSnake(vel_x,vel_y,pos_snake,gameplay,elemento){
	let pos_snake_new = []
	let previuos_position; 
	for(let i=0; i<pos_snake.length; i++){
		if(i===0){
			let x = pos_snake[i][0]
			let y = pos_snake[i][1]
			previuos_position = [x,y]
			let nX = x+vel_x
			let nY = y+vel_y
			if(nX>matriz.rows-1 && vel_x > 0){
				clearInterval(gameplay)
				elemento.classList.remove('hidden')
			}
			if(nX<0 && vel_x < 0){
				clearInterval(gameplay)
				elemento.classList.remove('hidden')
			}
			if(nY>matriz.columns-1 && vel_y > 0){
				clearInterval(gameplay)
				elemento.classList.remove('hidden')
			}
			if(nY<0 && vel_y < 0){
				clearInterval(gameplay)
				elemento.classList.remove('hidden')
			}
			pos_snake_new.push([nX,nY])
		} else {
			let x = pos_snake[i][0]
			let y = pos_snake[i][1]
			pos_snake[i] = previuos_position
			pos_snake_new.push(previuos_position)
			previuos_position = [x,y]
		}
	}
	let mapa = pos_snake_new.map(e=>''+e)
	if(mapa.length !== new Set(mapa).size){
		clearInterval(gameplay)
		elemento.classList.remove('hidden')
	} else return pos_snake_new
}


function comer(){
	let y = Math.floor(Math.random()*matriz.rows)
	let x = Math.floor(Math.random()*matriz.columns)
	return [y,x]
}


export { render, direccion, snake, moveSnake, comer }