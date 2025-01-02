let off = 0;
let offAdd = 0.009;
let waveOffAdd = 0.09;
let lineNumber  = 100
let cols = 20;
let colExtra = -3;
let strokeThinner = 10;
let ranLine = Math.round(Math.random()*lineNumber*cols);
console.log(ranLine)


function setup() {
  createCanvas(540, 540);
  blendMode(SCREEN)
}

function draw() {
  clear();
  background(0);
  stroke(255)

  let waveOff = 0;
  let gap = (height/ lineNumber)*1.2
  let colWidth = width / cols;

  let lineCount = 0
  for(let x = 0; x < cols; x++){
    for(let i=0; i < lineNumber; i++){

  
      let waveNoiseMultiplier = gap * 6;
      let waveNoise = (noise(waveOff+off) * waveNoiseMultiplier);
      // console.log(waveNoise)
      let y = (i * gap) + waveNoise - waveNoiseMultiplier/1.6
      strokeWeight(waveNoise/strokeThinner)
      strokeCap(SQUARE)

      lineCount === ranLine ? stroke("tomato") : stroke(255*noise(waveOff+off))
      line(x * colWidth-colExtra, y, x*colWidth+colWidth+colExtra, y)
      waveOff += waveOffAdd;
      lineCount++;
    }
  }
  
  
  off -= offAdd;
}