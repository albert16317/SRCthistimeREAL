function setup() 
{
	createCanvas(800, 400);
}
function preload() {
    img = loadImage(url);
} 
let pK = [110, 295]
let p0 = [150, 275]
let p1 = [450, 200]
let p2 = [600,300]
let r = 15

//art
let psling1 = [p0[0]-10, p0[1]]
let psling2 = [p0[0]+10, p0[1]]

//
let pKYdist 
let pKXdist
let t = 0
let l = 0
let kurvp = []
let shoot = false
let shootp = []
let hit = false
let point = 0
let targetxy = []
let distRectShoot = []
let distback 
let miss = false
let life = 3
let tabt = false

let target = {
    x: 750,
    y: 200,
    w: 10,
    h: 30
}

function draw()
{
frameRate(60)
background(200)

fill('blue')
//circle(p0[0], p0[1], r)
//circle(p2[0], p2[1], r)

fill('red')
//circle(p1[0], p1[1], r)

fill('black')
circle(pK[0], pK[1], 8)

//art
circle(psling1[0], psling1[1], 10)
circle(psling2[0], psling2[1], 10)

for(let l = 0; l < 1; l = l + 0.01){
    circle(ConlerpABC(psling2, pK, psling1, l)[0], ConlerpABC(psling2, pK, psling1, l)[1], 1.5)
}

//


if(mouseX <= pK[0] + r + 10 && mouseX >= pK[0] - r - 10 && pK[0] + Math.abs(mouseX - pK[0]) <= p0[0]){
    if(mouseY <= pK[1] + r + 10 && mouseY >= pK[1] - r - 10 && pK[1] + Math.abs(mouseY - pK[1]) >= p0[1]){

     if(mouseIsPressed){
        if(shoot === false){
            pK = [mouseX, mouseY]
            pKYdist = 130-pK[1]
            pKXdist = 130-pK[0]

            p2 = [200 + pKXdist * 5.2, 450 + pKYdist * 1.5]
            p1 = [150 + pKXdist * 4.2, 350 + pKYdist * 1.5]
            
        }
    }
}
}
if(pK[0] >= p0[0]){
    pK[0] = p0[0] - 5

}

if(pK[1] <= p0[1]){
    pK[1] = p0[1] + 5

}

if(keyIsDown(13)){
    shoot = true
    hit = false
    miss = false
}


if(shoot === true){
    shootp = [ConlerpABC(p0, p1, p2, t)[0], ConlerpABC(p0, p1, p2, t)[1]]
    circle(shootp[0], shootp[1], r)

    if(t<2){
        t+=0.02
    }
    if(t>2){
        t = 0
        shoot = false

    }
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
}
//guideP
noFill()
let pguide = [ConlerpABC(p0, p1, p2, 0.3)[0], ConlerpABC(p0, p1, p2, 0.2)[1]]
//circle(pguide[0], pguide[1], 5)


setLineDash([10, 10])
line(p0[0], p0[1], pguide[0], pguide[1])

//point og mål
targetxy = [target.x + target.w/2, target.y + target.h/2]
distRectShoot = distance(shootp, targetxy)
//console.log(shootp)

setLineDash([0, 0])
fill('yellow')
//checkdist
rect(target.x, target.y, target.w, target.h)
//console.log(distRectShoot)
if(shootp.length > 1){
    if(distRectShoot < 20){
        if(hit === false){
            point++
            target.y = random(50, 350)
            hit = true
            
        }     
    }
}

if(shootp.length > 1){
    if(shootp[0] > 800 && hit === false){
        if(miss === false){
            life--
            miss = true
        }
    }
}

if(shootp.length > 1){
    if(shootp[1] > 400 && hit === false){
        if(miss === false){
            life--
            miss = true
        }
    }
}
console.log(life)

fill('green')
if(life <= 2){
    noFill()
}
    circle(110, 50, 20)


fill('green')
if(life <= 1){
    noFill()
}
circle(80, 50, 20)

fill('green')
if(life === 0){
    noFill()
}
circle(50, 50, 20)

if(life == 0){
    tabt = true
    
}
if(tabt === true){
    fill('red')
    textSize(150)
    text('Du Tabte', 100, 200)
    console.log('tabt')
}

fill('black')
textSize(20)
text(point, 380, 50)
}
