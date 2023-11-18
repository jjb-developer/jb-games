import { Board } from './components/Board.js'
import { grid, arrow } from './vars.js'
import { render, direccion, snake, moveSnake, comer } from './logica.js'

const $ = tag => document.querySelector(tag)
const app = $('#app')

app.insertAdjacentHTML("beforeend", Board())
document.addEventListener('keyup', (e)=>{
	const newDirec = direccion(e)
	if(newDirec === 'right' && direc === 'left') direc = 'left'
	else if(newDirec === 'left' && direc === 'right') direc = 'right'
	else if(newDirec === 'up' && direc === 'down') direc = 'down'
	else if(newDirec === 'down' && direc === 'up') direc = 'up'
	else direc = direccion(e)
})

$('#up').addEventListener('click', ()=> direc = 'up' )
$('#down').addEventListener('click', ()=> direc = 'down' )
$('#left').addEventListener('click', ()=> direc = 'left' )
$('#right').addEventListener('click', ()=> direc = 'right' )

let direc;
let velocity;
let pSnake;
let points;
let eat;
render(grid)
const p = $('#point')
const menu = $('#menu')

function jugar(){
	const play = () => {
		pSnake = moveSnake(arrow[direc].x, arrow[direc].y, pSnake,gameplay,menu,direc)
		if(eat[0]===pSnake[0][0] && eat[1]===pSnake[0][1]){
			pSnake.push(pSnake[pSnake.length-1])
			eat = comer()
			points += 100
			p.innerText = points
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
	points = 0
	velocity = 500
	direc = 'down'
	pSnake = [[2,0],[1,0],[0,0]]
	eat = comer()
	let gameplay = setInterval(play,velocity)
}


const btn_play = $('#btn_play')
const box_point = $('#box_point')
btn_play.addEventListener('click', ()=>{
	jugar()
	menu.classList.add('hidden')
	box_point.classList.remove('hidden')
})




