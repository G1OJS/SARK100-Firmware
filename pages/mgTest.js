
// to do list

// add legend for line colours

const impXY = document.getElementById("impedance");
const smith = document.getElementById("smith");

impXY.getZ = (x,y) =>  {
                x=2*x; y=1-2*y;
                return {x,y}}  
smith.getZ = (x,y) => {
                x=-1+2*x; y=1-2*y;
                let norm=1.01*Math.sqrt(x*x+y*y);
                 if(norm>1) {x/=norm; y/=norm;}
                  let tmp=cdiv(1+x,y,1-x,-y);
                   tmp.x *=Z0; tmp.y*=Z0;
                return tmp;
}

impXY.drawAxes = () => {
  drawLine(impXY, -1, 0, 1, 0);
  drawLine(impXY, -1, -1, -1,1);
  drawMarker(impXY, -1+Z0, 0, "Z0");
  drawText(impXY,"X", 5, 25);
  drawText(impXY,"R", impXY.width - 25, impXY.width/2 - 5);
};

impXY.drawGrid=()=>{};

impXY.drawZL = (Z)=> {
  drawMarker(impXY, -1+Z.x, -Z.y, "ZL");
};

impXY.drawmodZ = (modZ) => {
  drawCircle(impXY, -1,0, modZ);
};

impXY.drawmodG = (modG) => {
  impXY.getContext('2d').lineWidth=2;
  let S = (1 + modG) / (1 - modG);
  drawCircle(impXY, -1+Z0* (S + 1 / S) / 2,  0,Z0*(S - 1 / S) / 2 );}

smith.drawAxes= () => {
  drawLine(smith, -1, 0, 1, 0);
  drawCircle(smith, 0, 0, 1 );
  drawMarker(smith,0,0, "Z0");
};

smith.drawGrid =() => {
  for(let xx=-2;xx<=2;xx+=.5){
  let Glast=null;
  for(let t=0;t<5;t+=.2){
     let Zt={x:t*Z0,y:xx*Z0};
     Gt = cdiv(Zt.x-Z0, Zt.y, Zt.x+Z0, Zt.y);
     if(Glast) drawLine(smith,Glast.x, Glast.y,Gt.x,Gt.y);
     Glast=Gt;
  }
  }
}

smith.drawmodG = (modG) => { 
  drawCircle(smith, 0, 0, modG );
};

smith.drawmodZ = (modZ) => {
  let Glast=null;
  for(let t=-Math.PI/2;t<1.01*Math.PI/2;t+=Math.PI/100){
     let Zt={x:modZ*Math.cos(t),y:modZ*Math.sin(t)};
     Gt = cdiv(Zt.x-Z0, Zt.y, Zt.x+Z0, Zt.y);
     if(Glast) drawLine(smith,Glast.x, Glast.y,Gt.x,Gt.y);
     Glast=Gt;
  }
};

smith.drawZL = (Z)=> {
  let G = cdiv(Z.x - Z0,Z.y,  Z.x + Z0, Z.y );
  drawMarker(smith, G.x, -G.y, "ZL");
};


const debug = document.getElementById("debug");

const Z0 =.6;
let Z = { x: 1.5, y: 0.3 };

init_canvas(impXY);
init_canvas(smith);
let dragging = null;

function cdiv(a, b, c, d ) {
  let m = c * c + d * d;
  return { x: (a * c + b * d) / m, y: (b * c - a * d) / m };
}

function init_canvas(canvasId){
  let scale=canvasId.width;
  let ctx=canvasId.getContext('2d');
  
  ctx.canvas.height=  ctx.canvas.width;
  
  // Handle touch events
  canvasId.addEventListener("touchstart", (e) => {
    dragging = true;
  });
  canvasId.addEventListener("touchend", (e) => {
    dragging = null;
  });
  
  canvasId.addEventListener("touchmove", (e) => {
    e.preventDefault();
    
    if (dragging) {
      let rect = canvasId.getBoundingClientRect();
      Z=canvasId.getZ(( e.touches[0].clientX - rect.left) / scale,  1-(e.touches[0].clientY-rect.top)/ scale );
               // debug.innerText = `${Z.x} ${Z.y}`;
      Draw(impXY,Z);
      Draw(smith,Z);
    }
  });

  // Handle mouse events
  canvasId.addEventListener("mousedown", (e) => {
    let rect = canvasId.getBoundingClientRect();
    Z=canvasId.getZ(e.offsetX/ scale, 1-e.offsetY/ scale );
    dragging = true;
    Draw(impXY,Z);
    Draw(smith,Z);
  });

  canvasId.addEventListener("mousemove", (e) => {
    if (dragging) {
      let rect = canvasId.getBoundingClientRect();                 Z=canvasId.getZ(e.offsetX/ scale, 1-e.offsetY/ scale );
      Draw(impXY,Z);
      Draw(smith,Z);    
    }
  });

  canvasId.addEventListener("mouseup", (e) => {
    dragging = null;
  });

  function Draw(canvasId,Z){
    // calculate impedance circle radius and centres
    let modZ = Math.sqrt(Z.x * Z.x + Z.y * Z.y);
    let G = cdiv(Z.x - Z0,Z.y,  Z.x + Z0, Z.y );
    let modG = Math.sqrt(G.x * G.x+ G.y* G.y);
  
    let ctx=canvasId.getContext('2d');
    ctx.clearRect(0, 0, scale*2,scale*2);
 
    ctx.font = "16px Arial";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    
    ctx.lineWidth=3;  
    canvasId.drawAxes();
    ctx.lineWidth=2;
    
    ctx.strokeStyle = "green";
    canvasId.drawmodG(modG);

    ctx.strokeStyle = "red";
    canvasId.drawmodZ(modZ);
    
    ctx.fillStyle = "red";
    canvasId.drawZL(Z);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth=1;
    canvasId.drawGrid();
  }
  
  Draw(impXY,Z);
  Draw(smith,Z);   

  
}
 
  
function drawLine(canvasId, x0, y0, x1, y1) {
  let scale=canvasId.width/2;
  let ctx=canvasId.getContext('2d');  
  ctx.beginPath();
  ctx.moveTo(scale+ x0 * scale, scale - y0 * scale);
  ctx.lineTo(scale + x1 * scale, scale - y1 * scale);
  ctx.stroke();
}

function drawCircle(canvasId, x,y,r) {
  let scale=canvasId.width/2;
  let ctx=canvasId.getContext('2d');
  ctx.beginPath();
  ctx.arc(
    scale + (x * scale),
    scale - (y * scale),
    (r * scale),
    0,
    2 * Math.PI
  );
  ctx.stroke();
}

function drawMarker(canvasId, x, y, label) {
  let scale=canvasId.width/2;
  let ctx=canvasId.getContext('2d');
  ctx.beginPath();
  ctx.arc(
    scale  + (x * scale) ,
    scale - (y * scale) ,
    5,
    0,
    2 * Math.PI
  );
  ctx.fill();
  ctx.fillText(
    label,
    scale + (x * scale)  - 10,
    (-y * scale)  + scale  - 5
  );
}

function drawText(canvasId,text,x,y){
  let ctx=canvasId.getContext('2d');
  ctx.fillText(text,x,y);
}