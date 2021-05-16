const image = document.querySelector('.image')
const img = document.querySelector('img')
const slider = document.querySelector('.slider')
const p = document.querySelector('p')

const t1 = new TimelineMax()

t1.fromTo(img,1, {height:'0%'}, {height:'70%', ease: Power2.easeInOut})
.fromTo(img,1.2,{width: '100%'}, {width: '80%'})

t1.fromTo(slider,1, {x:'-100%'}, {x:'0%'}, '-=1')

t1.fromTo(p,2,{opacity:0}, {opacity:1}).fromTo(p,1,{y:'-50%'}, {y:'0%'}, '-=2')