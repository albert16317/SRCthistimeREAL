function setup() 
{
	createCanvas(800, 400);
}

let pK = [110, 295]
let p0 = [150, 275]
let p1 = [450, 200]
let p2 = [600,300]
let r = 15

let pKYdist 
let pKXdist
let t = 0
let kurvp = []
let shoot = false
let shootp = []
let hit = false
let point = 0

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
circle(p0[0], p0[1], r)
//circle(p2[0], p2[1], r)

fill('red')
//circle(p1[0], p1[1], r)

fill('black')
circle(pK[0], pK[1], 10)




if(mouseX <= pK[0] + r + 10 && mouseX >= pK[0] - r - 10 && pK[0] + Math.abs(mouseX - pK[0]) <= p0[0]){
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

if(pK[0] >= p0[0]){
    pK[0] = p0[0] - 5

}

if(mouseY >= pK[1] + r + 10 && mouseX <= pK[1] - r - 10 && pK[1] + Math.abs(mouseX - pK[1]) >= p0[1]){
    if(mouseIsPressed){
        if(shoot === false){
           
        pK = [mouseX, mouseY]
       
        }
    }
}

if(pK[1] <= p0[1]){
    pK[1] = p0[1] + 5

}


if(keyIsDown(13)){
    shoot = true
    hit = false
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

noFill()
let pguide = [ConlerpABC(p0, p1, p2, 0.2)[0], ConlerpABC(p0, p1, p2, 0.2)[1]]
circle(pguide[0], pguide[1], 5)

setLineDash([10, 10])
line(p0[0], p0[1], pguide[0], pguide[1])

//point og mål
setLineDash([0, 0])
fill('yellow')
rect(target.x, target.y, target.w, target.h)
if(shootp.length > 1){
    if(target.x < shootp[0]+15 && target.y < shootp[1] && target.y + target.h > shootp[1] && t<1.1){
        if(hit === false){
            point++
            target.y = random(50, 350)
            hit = true
            
        }     
    }
}




console.log(hit)
fill('black')
text(point, 390, 50, 20, 20)

}



