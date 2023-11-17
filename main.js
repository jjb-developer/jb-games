import { Board } from './components/Board.js'
import { grid, arrow } from './vars.js'
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

let direc = 'down'
let pSnake = [[2,0],[1,0],[0,0]]
let eat = comer()
let velocity = 500
render(grid)

const btn_play = $('#btn_play')
btn_play.addEventListener('click', ()=>{
	
	const play = () => {
		pSnake = moveSnake(arrow[direc].x, arrow[direc].y, pSnake,gameplay,btn_play)
		if(eat[0]===pSnake[0][0] && eat[1]===pSnake[0][1]){
			pSnake.push(pSnake[pSnake.length-1])
			eat = comer()
			if(velocity !== 50) velocity -= 25
			clearInterval(gameplay)
			gameplay = setInterval(play,velocity)
		}
		const GRID = grid.map(row=>[0,0,0,0,0,0,0,0,0])
		GRID[eat[0]][eat[1]] = 1
		snake(GRID,pSnake)
		cuadricula.innerHTML = ''
		render(GRID)
	}

	btn_play.classList.add('hidden')
	let gameplay = setInterval(play,velocity)
})




