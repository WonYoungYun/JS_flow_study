//화살표 함수

//(매개변수) => {본문}
//매개변수가 하나인 경우 괄호생략 가능
//매개변수가 없을 경우엔 괄호 필수
//본문이 return뿐인 경우 {}와 return 생략 가능, 하지만 return이 개체인 경우 괄호 필수

const a = () => new Date()
const b = a => a*a
const c =(a,b) => a+b
const d = (a,b) => {
    console.log(a)
}

const e = x => ({x})
const f = a => b => a+b


//실행컨텍스트 생성시 this바인딩을 하지 않음
const obj = {
    a(){
        console.log(this)//this는 a를 가르킴
        // var b = function(){
        //     console.log(this)//this는 window를 가르킴
        // }
        const b = () =>{
            console.log(this)//this는 a를 가르킴
        }
        b();
    }
}
obj.a()//arrow function은 함수스코프를 생성한다. 하지만, 실행컨텍스트 생성시 this 바인딩을 하지 않는다.

const a1 = () =>{
    console.log(this)
}
a1()//window
a1.call({})//window


const sum2 = (...arg) =>{
    console.log(this)//prototype 프로퍼티가 존재하지 않음으로 생성자 함수로 사용할 수 없다. arguments와 caller가 숨겨져 있음으로 invoke해야만 값을 얻을 수 있다.
    return arg.reduce((p,c) => p + c)
}

const ex = {
    name: '안녕',
    b(){
        return this.name;
    },
    a: x =>{
        return this.name;//메소드로서 arrow function을 사용할 이유가 없음
    }
}
ex.b()//"안녕"
ex.a()//""
name()//""
window.name//""
