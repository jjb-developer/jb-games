const $ = tag => document.querySelector(tag)
const app = $('#app')

app.insertAdjacentHTML("beforeend", "<H1 class='capitalize text-zinc-50 text-5xl font-bold tracking-tight'>name project</h1>")

