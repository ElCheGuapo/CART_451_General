console.log("running protoype");

let bg, player;

// the scene is twice the size of the canvas
let SCENE_W = 1600;
let SCENE_H = 800;

function preload() {

}

function setup() {
    createCanvas(400, 400);
    createPlayer();
}

function draw() {
    background(255);

    camera.on();
    handleMovement();

    camera.x = player.pos.x;
    camera.y = player.pos.y;

    rect = (player.pos.x, 
        player.pos.y, 
        player.pos.x + 30, 
        player.pos.y + 30
    );

    // limit the ghost movements
	if (player.pos.x < 0) player.pos.x = 0;
	if (player.pos.y < 0) player.pos.y = 0;
	if (player.pos.x > SCENE_W) player.pos.x = SCENE_W;
	if (player.pos.y > SCENE_H) player.pos.y = SCENE_H;
}

function handleMovement() {
    //left and right
    if (keyIsDown(LEFT_ARROW)) {
        player.pos.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.pos.x += 5;
    }
    
    //up and down
    if (keyIsDown(UP_ARROW)) {
        player.pos.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.pos.y += 5;
    }
}

function createPlayer() {
    player = new Player(SCENE_W/2, SCENE_H/2, "temp");
}