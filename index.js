class Polygon {
  constructor(sides) {
    this.sides = sides
    this.accSides = this.sides.length

  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
  return  if(!Array.isArray(this.sides))
    let sum = 0
    for (let i of this.sides) {
      sum = sum + i
    }
    return sum
  }
}
class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}
