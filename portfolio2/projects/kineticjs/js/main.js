//Creating a stage variable to hold the new Kinetic Stage
var stage = new Kinetic.Stage({
    container: "container", //ID of our container div from index.html
    width: 578, //Width of our CANVAS inside the div
    height: 500 //Height of our CANVAS inside the div
});

//Creating a variable to hold the new Kinetic Layers
var layer = new Kinetic.Layer();
var layer2 = new Kinetic.Layer();

//Creating a variable to hold a new Kinetic Groups
var group = new Kinetic.Group({
    x: 289,
    y: 220
});

var group2 = new Kinetic.Group({
    x: 313,
    y: 220
});

var head = new Kinetic.Circle({
    x: 291,
    y: 153,
    radius: 10,
    offset: {x:100, y:100},
    fill: 'white',
    stroke: 'black',
    strokeWidth: 4
});

var head2 = new Kinetic.Circle({
    x: 291,
    y: 153,
    radius: 10,
    offset: {x:100, y:100},
    fill: 'white',
    stroke: 'black',
    strokeWidth: 4
});

var body = new Kinetic.Rect({
    x: 265,
    y: 120,
    height: 30,
    width: 15,
    offset: {x:100, y:100},
    fill: "blue",
    stroke: "black",
    strokeWidth: 4,
    cornerRadius:5
});

var body2 = new Kinetic.Rect({
    x: 265,
    y: 120,
    height: 30,
    width: 15,
    offset: {x:100, y:100},
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
    cornerRadius:5
});


var arms = new Kinetic.Rect({
    x: 270,
    y: 153,
    height: 15,
    width: 8,
    offset: {x:100, y:100},
    fill: "blue",
    stroke: "black",
    strokeWidth: 4,
    cornerRadius:5
});


var arms2 = new Kinetic.Rect({
    x: 270,
    y: 153,
    height: 15,
    width: 8,
    offset: {x:100, y:100},
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
    cornerRadius:5
});

var legs = new Kinetic.Rect({
    x: 268,
    y: 105,
    height: 30,
    width: 8,
    offset: {x:100, y:100},
    fill: "green",
    stroke: "black",
    strokeWidth: 4,
    cornerRadius:5
});


var legs2 = new Kinetic.Rect({
    x: 268,
    y: 105,
    height: 30,
    width: 8,
    offset: {x:100, y:100},
    fill: "yellow",
    stroke: "black",
    strokeWidth: 4,
    cornerRadius:5
});


var cape = new Kinetic.Shape({
    //The drawFunc function is similar to what we've learned this month
    // a Kinetic.Canvas renderer is passed into the drawFunc function
    drawFunc: function(context) {
      context.beginPath();
      context.lineTo(190, 20);
      context.quadraticCurveTo(160, 30, 190, 50);
      context.closePath();
      // KineticJS specific context method
      context.fillStrokeShape(this);
},
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4
});



var cape2 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.lineTo(190, 20);
      context.quadraticCurveTo(160, 30, 190, 50);
      context.closePath();
      // KineticJS specific context method
      context.fillStrokeShape(this);
},
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
});

var imageObj = new Image(); //new image instantiation
imageObj.src = 'images/earth.png'; //source of new image
imageObj.onload = function() { //function to draw the Kinetic Image
    var earth = new Kinetic.Image({
      x: 165,
      y: 90,
      image: imageObj,
      width: 250,
      height: 262
    });
    layer.add(earth); //Adding earth to "layer" layer
    layer.batchDraw(); //Method that automatically hooks redraws into the KineticJS animation engine
};

//Adding shapes to the "group" group
group.add(cape);
group.add(legs);
group.add(arms);
group.add(body);
group.add(head);

//Adding shapes to the "group2" group
group2.add(cape2);
group2.add(legs2);
group2.add(arms2);
group2.add(body2);
group2.add(head2);

//adding the groups to their respective layers
layer.add(group);
layer2.add(group2);

//adding the layers to the stage
stage.add(layer);
stage.add(layer2);


//Click Event to start rotation animation
document.getElementById("startAnimation").addEventListener("click", function(){    
    //Making the groups rotate a complete circle every 4 seconds then passing stage to be redrawn
    var angularSpeed = 360 / 4;
    var anim = new Kinetic.Animation(function(frame) {
      var angleDiff = frame.timeDiff * angularSpeed / 1000;
      group.rotate(angleDiff);
      group2.rotate(angleDiff);
    }, stage);

    anim.start();
    
    //Click event to stop rotation animation
    document.getElementById("stopAnimation").addEventListener("click", function(){
    anim.stop();
    });
});


document.getElementById("moveToTop").addEventListener("click", function(){
    layer.moveToTop();
    layer.draw();
}, false);

document.getElementById("moveToBottom").addEventListener("click", function(){
    layer.moveToBottom();
    layer.draw();
}, false);


stage.setDraggable("true");