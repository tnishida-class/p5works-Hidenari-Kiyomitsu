// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(j % 2 == 0){
        fill(i % 2 == 1 ? 125 : 255);
      }
      else if(j % 2 == 1){
        fill(i % 2 == 1 ? 255 : 125);
      }
      rect(size * i, size * j, size, size);
    }
    // for(let j = 0; j < 3; j++){
    //   if(j % 2 == 0){
    //     fill(i % 2 == 1 ? 'red' : 255);
    //   }
    //   else if(j % 2 == 1){
    //     fill(i % 2 == 0 ? 'red' : 255);
    //   }
    // }
  }
}
