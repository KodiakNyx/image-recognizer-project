img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('obj4.png');
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "")
    {
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML =
            "Status : Object Detected";
          document.getElementById("number_of_objects").innerHTML =
            "Number of onjects detected are : " + objects.length;

          fill(r, g, b);
          percent = floor(objects[i].confidence * 100);
          text(
            objects[i].label + " " + percent + "%",
            objects[i].x,
            objects[i].y
          );
          noFill();
          stroke(r, g, b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }    
    }
}