let matriz = {
	'rows': 18,
	'columns': 9
}

let grid = [
	[2,0,0,0,0,0,0,0,2],
	[3,0,0,0,0,0,0,0,3],
	[4,0,0,0,0,0,0,0,4],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[4,0,0,0,0,0,0,0,4],
	[3,0,0,0,0,0,0,0,3],
	[2,0,0,0,0,0,0,0,2],
]


const arrow = {
	'left': { x: 0, y: -1},
	'right': { x: 0, y: 1},
	'up': { x: -1, y: 0},
	'down': { x: 1, y: 0}
}

const color = {
	'bg': 'bg-zinc-900',
	'eat': 'bg-sky-500',
	'snake': {
		'n1': 'bg-amber-600',
		'n2': 'bg-amber-500',
		'n': 'bg-amber-400'
	}
}


export { grid, arrow, matriz, color }