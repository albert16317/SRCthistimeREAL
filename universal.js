function lerpABC (a,b,c){
    let lerpab = [lerp(a[0], b[0], t), lerp(a[1], b[1], t)]
    let lerpbc = [lerp(b[0], c[0], t), lerp(b[1], c[1], t)]
    let kurvPoint = [lerp(lerpab[0], lerpbc[0], t), lerp(lerpab[1], lerpbc[1], t)]
    //console.log(kurvPoint)
    return(kurvPoint)
}

function ConlerpABC (a,b,c,t){
    let lerpab = [lerp(a[0], b[0], t), lerp(a[1], b[1], t)]
    let lerpbc = [lerp(b[0], c[0], t), lerp(b[1], c[1], t)]
    let kurvPoint = [lerp(lerpab[0], lerpbc[0], t), lerp(lerpab[1], lerpbc[1], t)]
    //console.log(kurvPoint)
    return(kurvPoint)
}

function distance(a, b){
    let d = sqrt(Math.abs((a[0] - b[0])**2 + (a[1] - b[1])**2))
    return(d)
}

