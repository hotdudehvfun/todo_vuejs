/*
TODO
tabs


*/


let paint =
{
    canvas:null
}
let _frame_rate = 60




//add events
document.addEventListener("DOMContentLoaded", function () {

});


function preload()
{

}

function setup() {

    frameRate(_frame_rate)

    paint.pencil=get_default_pencil()















    paint.canvas = createCanvas(windowWidth, windowHeight)
    paint.canvas.parent("canvas_parent")


}

function windowResized()
{
    //resizeCanvas(music.canvas_w, music.canvas_h);
}

function draw() {
    //clear();
    noFill()
    paint.pencil.draw();
}


function mouseDragged()
{
    //paint.pencil.allow_draw=true
}

function mouseReleased()
{
    paint.pencil.allow_draw=false
    paint.pencil.currentPath = [];
    paint.pencil.paths=[]
}

function mouseMoved()
{
    
}

function mousePressed()
{

    paint.pencil.allow_draw=true
	paint.pencil.currentPath = [];
	paint.pencil.paths.push(paint.pencil.currentPath);
}
function handle_pencil_size_change(obj)
{
    paint.pencil.size=obj.value
    console.log(paint.pencil);

}
function get_default_pencil()
{
    return{
        size:1,
        fill_color:"black",
        stroke_color:"black",
        allow_draw:false,
        paths:[],
        current_path:[],
        draw:function()
        {
            if(this.allow_draw)
            {
                stroke(this.stroke_color);
                strokeWeight(this.size)
                line(mouseX, mouseY, pmouseX, pmouseY);
                // const point = {
                //         x: mouseX,
                //         y: mouseY
                //     };
                // this.currentPath.push(point);
	
                // let that=this;
                // this.paths.forEach(path => {
                //     beginShape();
                //     path.forEach(point => {
                //         strokeWeight(that.size);
                //         stroke(that.stroke_color);
                //         vertex(point.x, point.y);
                        
                //     });
                //     endShape();
                // });
            }
        }
    }
}