class Player {
    constructor(x, y, sprite) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }
}