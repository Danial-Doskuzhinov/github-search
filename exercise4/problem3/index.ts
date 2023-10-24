// Update it as much as you want, just don't change the name
export class Circle {//3.14 * r *r 
    circle:number;
    
    constructor(circle:number){
         this.circle = circle 
    }
area(){
    return Math.PI * this.circle * this.circle
}
}

// Update it as much as you want, just don't change the name
export class Rectangle {
    rect:number;
    rectt:number
    constructor(rect:number, rectt:number){
       this.rect = rect
       this.rectt = rectt
    }
area(){
    return this.rect * this.rectt;
}
}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(a:Circle | Rectangle,b: Circle | Rectangle){
    return a.area() + b.area()
    } 
