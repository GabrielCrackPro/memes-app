const memeContainer = document.querySelector('.meme-container')

const API_URL = "https://api.imgflip.com/get_memes"
const GENERATE_MEME_URL = "https://imgflip.com/memegenerator/"

const getData = async (url) => {
let data = await fetch(url).then(response => response.json())
return data
}

window.onload = async () => {
let result = await getData(API_URL)
let randomIndex = Math.floor(Math.random() * result.data.memes.length)	
let meme = result.data.memes[randomIndex]	

memeContainer.innerHTML = `
<div class="card meme d-flex align-items-center justify-content-center mt-2">
<h2 class="card-header w-100 text-center fw-bold bg-primary text-white">${meme.name} <button onclick="location.reload()" class="btn btn-primary"><i class="fas fa-redo-alt"></i></button></h2>
<img src="${meme.url}" width="${meme.width}" height="${meme.height}" class="mt-2 mb-2">
<div class="btn-group mb-2">
<button class="btn btn-primary about-btn"><i class="fas fa-info"></i> About this template</button>
<button class="btn btn-primary more-btn p-2"><i class="fas fa-plus"></i> Memes with this template</button>
<button class="btn btn-primary get-btn p-2"><i class="fas fa-arrow-down"></i> Get this template</button>
<button class="btn btn-primary origin-btn p-2"><i class="fab fa-youtube"></i> Origin of this template</button>
</div>
</div>
`
const image = document.querySelector('img')
const aboutBtn = document.querySelector(`.about-btn`)
const moreBtn = document.querySelector(`.more-btn`)
const getBtn = document.querySelector('.get-btn')
const originBtn = document.querySelector('.origin-btn')

aboutBtn.addEventListener('click', () => {
window.open(`https://knowyourmeme.com/search?sort=newest&q=${meme.name}`)
})
moreBtn.addEventListener('click', () => {
window.open(`https://www.google.com/search?q=${meme.name}+meme`)
})
getBtn.addEventListener('click', () => {
window.open(meme.url)
})
originBtn.addEventListener('click', () => {
window.open(`https://www.youtube.com/results?search_query=${meme.name}+meme+origin`)
})
}
