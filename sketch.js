let flowers = []

function setup() {
  createCanvas(400, 400);

  flowers.push(new Flower(100, 150, random(0, 200)))
  flowers.push(new Flower(250, 90, random(0, 200)))
  flowers.push(new Flower(200, 250, random(0, 200)))
}

function draw() {
  background(150);

  for (flower of flowers){
    flower.update()
    flower.show()
  }

}
