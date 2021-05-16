const image = document.querySelector('.image')
const img = document.querySelector('img')
const slider = document.querySelector('.slider')
const p = document.querySelector('p')

const t1 = new TimelineMax()

t1.fromTo(img,1, {height:'0%'}, {height:'70%'}, ease:power2.easeInOut)

t1.fromTo(slider,1.5, {x:'-100%'}, {x:'0%'})

t1.fromTo(p,2,{opacity:0}, {opacity:1})