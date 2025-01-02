let boxNumber = 200;
let zRange = 500
let boxDims = 100;
let boxDepth = 5;
let speed=3
let cubes = []


function setup() {
  createCanvas(540, 540, WEBGL);
  angleMode(DEGREES)
  makeCubes()
  blendMode(OVERLAY)
}

function draw() {
  background(255)
  orbitControl()
  rotateX(45)
  rotateY(45)
  translate(0, 0, -150)
  noStroke()

  drawCubes()
}

function drawCubes() {
  cubes.forEach( (cube) =>{
    push()
    translate(cube.x, cube.y, cube.z)
    fill(cube.fill)
    box(cube.width, cube.height, cube.depth)
    cube.z += speed
    if(cube.z > zRange) cube.z = -zRange - boxDepth
    pop()
  })
}

function makeCubes() {
  const ranCube = floor(random(boxNumber))
  for(let i=0; i < boxNumber; i++){

    let theCube = i === ranCube;

    cubes.push(
      {
        width: theCube ? boxDims + random(100, 200) : boxDims + random(-20, 100),
        height: theCube ? boxDims + random(100, 200) : boxDims + random(-20, 100),
        depth: theCube ? boxDepth*1 : boxDepth,
        x: 0,
        y: 0,
        z: random(-zRange, zRange),
        fill: theCube ? [255,99,71, 120] : [0, 0, 0, 10]
      }
    )
  }
}

