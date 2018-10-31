//Class
    //ES5
    function Person1 (name) {
        this.name = name
    }//생성자 함수는 생성자로도, 그냥함수로도 쓸 수 있었다.

    Person1.prototype.getName = function(){
        return this.name
    }
    Person1.isPerson = function(obj){
        return obj instanceof this
    }
    const me1 = new Person1('나')

    me1.__proto__ === Person1.prototype // true
    me1.getName() === Person1.prototype.getName() //true

    console.log(me1.getName())//나
    console.log(Person1.isPerson(me1))//true
    console.log(me1.__proto__.getName())//undefined
    Person1.prototype.name = '임의'
    console.log(me1.__proto__.getName())//임의
    console.log(Person1.prototype.getName())//임의
    //Person1.isPerson(me1) 은 가능하지만 me1.isPerson()은 불가능

    //ES6
    class Person2 {
        constructor (name) {this.name = name}
        getName() {return this.name}
        static isPerson(obj){return obj instanceof this}// 생성자 함수 본인이 직접 가지고 있는 method인 static method를 이렇게 지정가능
    }
    const me2 = new Person2('이름')
    console.log(me2.getName())
    console.log(Person2.isPerson(me2))

//클래스 리터럴
class People1 {}
//기명 클래스 표현식
const a = function aa() {}
const People2 = class People22 {}
//익명 클래스 표현식
const aaa = function () {}
let People3 = class {}

    // 기존방식과의 차이점
    // if(true){
    //     class A {}
    //     const a1 = new A()//ok
    //     if(true){
    //         const b= new A()//let과 const처럼 TDZ에 걸림
    //         class A{}
    //     }
    // }
    // const c = new A()//reference Error

//열거 가능여부
class A2 {
    a() {}
    b() {}
    static c (){}
}
for (let p in A2.prototype){
    console.log(p)//클래스 내부에서 정의한 메소드는 열거되지않음
    //class 내부는 strict mode가 강제된다.
}

//constructor를 제외한 메소드는 prototype이 없어서 new로 생성할 수 없다.

let B = class{
    constructor () {B = 'B'}
}
const b = new B()
console.log(B) //가능

// class C {
//     constructor() {C = 'C'}
// }
// const c = new C() //error가 발생한다. 
// C = '10'; //10, 클래스 선언문 방식에서 내부에서 해당 클래스를 바꾸려는 시도는 상수로서 동작하지만 외부에서 할당하는 방식은 let으로 선언한 것과 같은 동작이 된다.

class D {
    d () {}//선언과 동시에 읽기전용으로 바뀜
}
D.prototype = {
    b() {console.log(1)}//prototype 전체를 바꾸려는 시도를 했을때는 되지 않기때문에 읽기전용 프로퍼티 인 것을 알 수 있다.
}
const d = new D();
console.log(d.d())//undefined
D.prototype.d = function() {console.log(1)}
d.d()//1 전체를 바꾸려는 시도는 안되지만 메소드 하나하나는 변경이 된다.

//class 자체를 함수의 인자로 넘길 수 있다.
const instanceGenerator = (className, ...params) => new className(...params)
class Human{
    constructor(name) {this.name = name}
    sayName() {console.log(this.name)}
}
const my = instanceGenerator(Human, '나의')
const your = instanceGenerator(class{
    constructor(name) { this.name = name}
    sayName(){console.log(this.name)}
}, '너의')
my.sayName()
your.sayName()//익명 클래스이기 때문에 클래스이름이없다.


//
class CustomHTMLElement{
    constructor(element){
        this._element = element
    }
    get html(){
        return this._element.innerHTML
    }
    set html(value){
        this._element.innerHTML = value
    }
}
console.log(Object.entries(CustomHTMLElement.prototype))
console.log(Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html'))

//computed property
const method1 = 'sayName'
const fullNameGetter = 'fullname'
class Human1{
    constructor(name){this.name = name}
    [method1](){console.log(this.name)}
    get [fullNameGetter +123](){return this.name + ' 안녕 '}
}
const mine = new Human1('나임')
mine.sayName()
console.log(mine.fullname123)

//generator
class F{
    *gene () {}
}

//Symbol.iterator는 객체와 같이 [Symbol.iterator]를 추가해주면 된다.