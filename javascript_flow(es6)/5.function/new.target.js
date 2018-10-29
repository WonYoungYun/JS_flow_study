//new.target

    //new연산자를 강제하는 코드
    function Person(name){
        if(this instanceof Person){
            this.name = name
        } else {
            throw new Error('new 연산자를 사용하세요.')
        }
    }
    var p1 = new Person('사람') //가능
    console.log(p1)//Person{}
    var p2 = Person('사람2')//new를 사용하지않아서 error
    var p3 = Person.call({}, "사람3")//error
    var p4 = Person.call(p1, '사람4')//p1이 Person의 인스턴스이기 때문에 에러가 발생하지 않지만 결과값이 undefined가 나옴, 문제발생

    function Person(name){
        console.dir(new.target)//console.log(new)하면 결과가 나오지 않음, 즉 하나의 내부변수, new Person(1)를 하면 Person이 target이 됨
        if(new.target !== undefined){
            this.name = name
        } else{
            throw new Error('new연산자를 사용하세요')
        }
    }

    Person()//undefined
    new Person(1)//Person(name)
    const p4 = Person.call(p1, '사람4')//error

    function Person(name){
        console.log(new.target)
        if(new.target === Person){
            this.name = name
        } else{
            throw new Error('Person 생성자함수를 new로 호출해야한다.')
        }
    }
    function Android(name){
        Person.call(this, name)
    }
    const p2 = new Android('봇')//Person이 new로 생성되지 않았음으로 error를 던짐

//추상클래스로 활용가능
class A{
    constructor(){
        if(new.target === A){throw new Error('추상클래스임')}
    }
}
class B extends A{
    constructor(){
        super();
    }
}
const bClass = new B();
const aClass = new A();
bClass//B{} 인스턴스 존재
aClass//인스턴스가 존재하지 않는다.

    
