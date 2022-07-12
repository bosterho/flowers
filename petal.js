class Petal {
    constructor(x, y, w, h, r, c) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.r = r
        this.fill = color(255, random(200, 255) - c, 0, 100)
        this.t = random(0, 2)
        this.w2 = 0
    }

    update() {
        this.w2 = map(sin(this.t*2), -1, 1, 0.1, 0.2)
        this.t += 0.005
        this.r2 = noise(this.t + 1) / 3
    }

    show() {
        push()
        translate(this.x, this.y)
        rotate(this.r + this.r2)
        stroke(255, 255, 255, 150)
        fill(this.fill)
        beginShape()
        vertex(0, 0)
        bezierVertex(
            cos(PI * (1 + this.w + this.w2)) * this.h / 3,
            sin(PI * (1 + this.w + this.w2)) * this.h / 3,
            cos(PI * (1 + this.w + this.w2)) * this.h / 3 * 2,
            sin(PI * (1 + this.w + this.w2)) * this.h / 3 * 2,
            cos(PI) * this.h,
            sin(PI) * this.h
        )

        bezierVertex(
            cos(PI * (1 - this.w - this.w2)) * this.h / 3 * 2,
            sin(PI * (1 - this.w - this.w2)) * this.h / 3 * 2,
            cos(PI * (1 - this.w - this.w2)) * this.h / 3,
            sin(PI * (1 - this.w - this.w2)) * this.h / 3,
            0,
            0
        )
        endShape()
        pop()
    }


}