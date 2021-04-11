let jsonobj;
let btns = []; // 管所有的 btn
let x=0;


// 預讀取
function preload(){
jsonobj = loadJSON('data.json');
img = loadImage('map.jpg');
}


function setup() {
createCanvas(360, 180);
console.log(jsonobj);
console.log(jsonobj.metadata.count);
console.log(jsonobj.features[0].geometry.coordinates);
console.log(jsonobj.features[0].geometry.coordinates);
  
  
  frameRate(10);

  

jsonobj.features.forEach((v)=>{
let lat = v.geometry.coordinates[0];
let lang = v.geometry.coordinates[1];
let mag = v.properties.mag;
// 根據每筆資料製作 btn 物件
btns.push(new btn((lat+180),180-(lang+90),mag*mag*1.3));
});
}


function draw() {
  
   x=x+0.005;
//background(220);
image(img, 0, 0,360,180);
// 根據 btns 袋子中的每物件進行顯示
btns.forEach((b)=>{
b.display();
})
}

// 物件導向建立 按鈕
class btn{
constructor(x,y,size){
this.x = x;
this.y = y;
this.size = size;
}
display(){
if (mouseX>this.x-this.size/2 &&
    mouseX<this.x+this.size/2 &&
    mouseY>this.y-this.size/2 &&
    mouseY<this.y+this.size/2){
  
  
  let step = frameCount % 20;
  let angle = map(step,this.x, 20, this.y, TWO_PI);
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  
  
  // Equivalent to rotate(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, this.x,this.y);
rect(this.x, this.y,this.size*sin(x), this.size*sin(x));

 fill(255,177,27,this.size*3)
}else {
  
    fill(0,92,175,this.size*1);
  
}
noStroke();
//circle(this.x,this.y,this.size);
 rect(this.x, this.y,this.size*sin(x), this.size*sin(x));
}
}