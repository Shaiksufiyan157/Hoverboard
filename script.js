const container=document.getElementById('container')
const SQUARE=500
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

for(let i=0;i<SQUARE;i++){
    const square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>setColor(square))
    square.addEventListener('mouseout',()=>removeColor(square))   
    container.appendChild(square)
}
function setColor(square){
    const color=getRandomColor()
    square.style.background=color
    square.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}
function removeColor(square){
    square.style.background='#1d1d1d'
    square.style.boxShadow='0 0 2px #111'
}
function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}