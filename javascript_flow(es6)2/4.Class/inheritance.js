//클래스 상속
function Square(width){
    this.width = width
}

Square.prototype.getArea = function(){
    return this.width *  (this.height)
}
function Rectangle(width, height){
    Square.call(this, width)
    this.height = height
}
Rectangle.prototype = new Square()
function F(){}
F.prototype = Rectangle.prototype
Rectangle.prototype = new F()
Rectangle.prototype.constructor = Rectangle

const square= Square(3)
const rect = new Rectangle(3,4)
console.log(rect.getArea())
console.log(rect instanceof Rectangle)
console.log(rect instanceof Square)
    //이러한 복잡한 과정을 했다. 유사상속..


class Square2{
    constructor(width){
        this.width = width
    }
    getArea(){
        return this.width * (this.height || this.width)
    }
}
class Rectangle2 extends Square2{
    constructor(width,height){
        super(width)//상위클래스의 constructor를 호출하는 함수, 오직 constructor안에서만 호출 가능
        this.height = height
    }
}
const rect2 = new Rectangle2(10,20)
console.log(rect2.getArea())
//rect2.(__proto__) // === Rectangle2.prototype
//rect2.(__proto__).(__proto__)// === Square2.prototype
//rect2.(__proto__).(__proto__).getArea()
//__proto__는 생략가능함으로 rect2.getArea()로 호출

//class [서브클래스명] extends [수퍼클래스명] {[서브클래스본문]}
//수퍼클래스명에 클래스식이 와도되지만 굳이..?

//함수도 상속 가능하다.
function Person(name) {this.name = name}
class Employee extends Person{
    constructor (name, position){
        super(name)
        this.position = position
    }
}
const me = new Employee('나', 'worker')
console.log(me)

//내장타입 상속가능
class NewArray extends Array{
    toString(){
        return `[${super.toString}]`
    }
}
const arr = new NewArray(1,2,3)
console.log(arr)
console.log(arr.toString())

//super
    //1.construcor 내부
        //수퍼클래스의 constructor를 호출하는 함수개념
        //서브클래스의 consturctor 내부에서 this에 접근하려 할 때는 가장 먼저 super함수를 호출해야 한다.
    // class Square2{
    //     constructor(width){
    //         this.width = width
    //     }
    //     getArea(){
    //         return this.width * (this.height || this.width)
    //     }
    // }
    // class Rectangle2 extends Square2{
    //     constructor(width,height){
    //         this.height = height
    //         super(width)//error 발생, this에 접근하기 전에 super()를 호출해줘야 한다.
    //     }
    // }
    // const rect2 = new Rectangle2(10,20)

    //2.메소드 내부에서
        //수퍼클래스의 프로토타입 객체 개념
        //메소드 오버라이드 또는 상위 메소드 호출 목적으로 활용
    class Rectangle3 {
        constructor(width,height){
            this.width = width
            this.height = height
        }
        getArea(){
            return this.width * this.height
        }
    }
    class Square3 extends Rectangle3{
        constructor(width){
            //console.log(super) // error super는 확인 할 수없다.
            super(width, width)
        }
        getArea(){
            console.log('get area of square')
            return super.getArea()
        }
        getX(){
            return super.getArea()
        }
    }
    
    const square2 = new Square3(3)
    console.log(square2.getArea())
    console.log(square2.getX())


    //new.target을 이용하여 추상클래스처럼 구현
    class Shape{
        constructor(){
            if(new.target === Shape){
                throw new Error('이 클래스는 직접 인스턴스화 할 수 없는 추상클래스 입니다.')
            }
        }
        getSize(){}
    }
    // const s = new Shape() //error

//prototype chaining을 타기 때문에 상위의 상위도 상속가능
    class A {
        constructor(a,b){
            this.a = a;
            this.b = b;
        }
        method1 (){return this.a}
    }
    class B extends A{
    }
    class C extends B{
        constructor(a,b,c){
            super(a,b)
            this.c = c
        }
        method1(){return super.method1()}
    }
    const c = new C(1,2,3)
    console.log(c)