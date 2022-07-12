class Flower{
    constructor(x, y, c){
        this.x = x
        this.y = y
        this.petals = []
        for (let i = 0; i < 10; i++) {
            this.petals.push(
                new Petal(
                    this.x, 
                    this.y, 
                    0.2, 
                    random(90, 100), 
                    PI / 10 * 2 * i,
                    c
                )
            )
        }
    }

    update(){
        for (let petal of this.petals){
            petal.update()
        }
    }

    show(){
        for (let petal of this.petals){
            petal.show()
        }
    }

    
}