
    const canvas = document.getElementById('impedance');
    const smith = document.getElementById('smith');
    const debug = document.getElementById('debug');
    const ctx = canvas.getContext('2d');
    const stx = smith.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Center the graph at the origin
    const origin = { x: 0, y: height / 2 };
    const Z0={x:width/4, y:height/2};

    // Initial values
    let Z={x:Z0.x*1.2,y:Z0.x*0.8};
    let circle_modZ = { x: 0, y: 0, r: 1 }; // Circle at origin
    let circle_modG = { x: 150, y: 0, r: 1 }; // Second circle
    let dragging = null;
	  calculateAndDraw();
	  function mod(Z) {
      return Math.sqrt(Z.x * Z.x + Z.y * Z.y)     
    }

    // Helper to transform graph coordinates to canvas coordinates
    function toCanvas(x, y) {
      return { x: origin.x + x, y: origin.y - y };
    }

    // Helper to transform canvas coordinates to graph coordinates
    function toGraph(x, y) {
      return { x: x - origin.x, y: origin.y - y };
    }

    // Draw circles
    function drawCircle(circle) {
      const { x, y } = toCanvas(circle.x, circle.y);
      ctx.beginPath();
      ctx.arc(x, y, circle.r, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw the axes
    function drawAxes() {
      ctx.strokeStyle = '#aaa';
      ctx.beginPath();
      ctx.moveTo(0, origin.y);
      ctx.lineTo(width, origin.y); // X-axis
      ctx.moveTo(origin.x, 0);
      ctx.lineTo(origin.x, height); // Y-axis
      ctx.stroke();
      
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(Z0.x, Z0.y, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.font = '20px Arial';
			ctx.fillText("Z0", Z0.x-10, Z0.y+25);
      
    }

    // Calculate everything from current Z
    function calculateAndDraw() {
    	let modZ = mod(Z);
      let modG = Math.sqrt((Z.x-Z0.x)*(Z.x-Z0.x)+Z.y*Z.y)
      		/ Math.sqrt((Z.x+Z0.x)*(Z.x+Z0.x)+Z.y*Z.y) ;
      let S=(1+modG)/(1-modG);
      circle_modG.x=Z0.x*(S+1/S)/2;
      circle_modG.r=Z0.x*(S-1/S)/2;
    	console.log(modZ, modG, S);
      circle_modZ.r = modZ;
      draw();
    }

    // Draw selected impedance point(s)
    function drawLoadImpedance(Z) {
    
        var { x, y } = toCanvas(Z.x, Z.y);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.font = '20px Arial';
	ctx.fillText("ZL", x-10, y+25);
        
        var { x, y } = toCanvas(Z.x, -Z.y);
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Check if point is near a given position
    function isNear(point, x, y) {
      const dx = point.x - x;
      const dy = point.y - y;
      return Math.sqrt(dx * dx + dy * dy) < 10; // Threshold
    }

    // Main draw function
    function draw() {
      ctx.clearRect(0, 0, width, height); // Clear canvas
      drawAxes();
      drawCircle(circle_modZ);
      drawLoadImpedance(Z);
      drawCircle(circle_modG);
    }
    
    // Handle touch events
    canvas.addEventListener('touchstart', (e) => {
	dragging=true;
	//debug.innerText ="touchstart";
    });
    canvas.addEventListener('touchend', (e) => {
	dragging=null;
    });
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (dragging) {
	let rect = impedance.getBoundingClientRect();
	Z = toGraph(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top );
	//debug.innerText = `${Z.x}, ${Z.y}`;
        calculateAndDraw();
      }
    });

    // Handle mouse events
    canvas.addEventListener('mousedown', (e) => {
      //debug.innerText ="mousedown";
      Z = toGraph(e.offsetX, e.offsetY);
      if(dragging) {dragging=null} else {dragging=true};
      calculateAndDraw();
    });

    canvas.addEventListener('mousemove', (e) => {
      if (dragging) {
	Z = toGraph(e.offsetX, e.offsetY);
	//debug.innerText = `${e.offsetX}, ${e.offsetY}`;
        calculateAndDraw();
      }
    });

    canvas.addEventListener('mouseup', (e) => {
	dragging=null;
    });

    draw();
  
