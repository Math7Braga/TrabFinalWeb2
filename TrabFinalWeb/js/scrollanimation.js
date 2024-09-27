
const scrollanima = document.querySelectorAll(`[data-anima="scroll"]`);


function animarscroll() {
const topoItem = scrollanima.getboundingClientRect().top

console.log(topoItem)
}




window.addEventListener(`scroll`, animarscroll);






















