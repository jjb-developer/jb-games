function Board(){
	return `
		<div id='cuadricula' class='grid grid-cols-[repeat(9,1fr)] grid-rows-[repeat(18,1fr)] w-[246px] h-[492px] bg-white border-2 border-zinc-900 font-bold text-xs text-zinc-500 gap-[3px] p-[3px]'>
		</div>
	`
}

export { Board }