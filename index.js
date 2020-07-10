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