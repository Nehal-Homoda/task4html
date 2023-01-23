let can=document.querySelector(".can");
let ctx=can.getContext("2d");
let count=0;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(40,40);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();
    
    let id=setInterval(()=>{
        count+=50;
        ctx.lineTo(count,count);
        ctx.stroke();
        if(count==450)
        {
           clearInterval(id);
           alert("animation done successfuly");
        }
        
    },500);


