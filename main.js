import { Board } from './components/Board.js'
import { grid } from './vars.js'
import { render, direccion, snake, moveSnake, comer } from './logica.js'

const $ = tag => document.querySelector(tag)
const app = $('#app')

app.insertAdjacentHTML("beforeend", Board())
document.addEventListener('keyup', (e)=>{
	const newDirec = direccion(e)
	if(newDirec === 'right' && direc === 'left') pSnake.reverse()
	if(newDirec === 'left' && direc === 'right') pSnake.reverse()
	if(newDirec === 'up' && direc === 'down') pSnake.reverse()
	if(newDirec === 'down' && direc === 'up') pSnake.reverse()
	direc = newDirec
})

$('#up').addEventListener('click', ()=> direc = 'up' )
$('#down').addEventListener('click', ()=> direc = 'down' )
$('#left').addEventListener('click', ()=> direc = 'left' )
$('#right').addEventListener('click', ()=> direc = 'right' )

const arrow = {
	'left': { x: 0, y: -1},
	'right': { x: 0, y: 1},
	'up': { x: -1, y: 0},
	'down': { x: 1, y: 0}
}

let direc = 'left'
let pSnake = [[4,4],[4,5],[4,6],[5,6],[6,6],[7,6]]
let eat = [7,5]

setInterval(()=>{

	pSnake = moveSnake(arrow[direc].x, arrow[direc].y, pSnake)
	if(eat[0]===pSnake[0][0] && eat[1]===pSnake[0][1]){
		pSnake.push(pSnake[pSnake.length-1])
	}
	const GRID = grid.map(row=>[0,0,0,0,0,0,0,0,0])
	GRID[eat[0]][eat[1]] = 1
	snake(GRID,pSnake)
	cuadricula.innerHTML = ''
	render(GRID)
}, 125)

