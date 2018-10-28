//let은 재할당 가능
let a =1
a =2
console.log(a)

//반복문 내에서의 함수 실행시
var funcs =[]
for (var i =0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs.forEach(function(f){
    f()
})  //10 * 10번

var funcs =[]
for (var i =0; i<10; i++){
    funcs.push(function(v){
        return function(){
            console.log(v)
        }
    })(i)
}
funcs.forEach(function(f){
    f()
}) // 0,1,2,3,4,5,6,7,8,9

let funcs =[]
for(let i =0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs.forEach(function(f){
    f()
}) // 0,1,2,3,4,5,6,7,8,9

//const는 재할당이 불가능하다.
const PI = 3.14
PI = 3.14 //error

const PI //error
PI = 3.14

//const의 참조타입데이터
const OBJ = {
    props1: 1,
    props2: 2
}
OBJ = 10; //error
OBJ.props1 = 3//const를 사용하더라도 OBJ의 메소드에 접근하여 값을 변경할 수 있다. why? js의 메모리할당원리와 관련

const Arr = [1,2,3]
Arr = 1 //error
Arr.push(4) // [1,2,3,4]
delete Arr[0] //true

//Object.freeze
const Obj1 = {
    props1: 1,
    props2: [1,2,3]
}
Object.freeze(Obj1)
Obj1.props1 = 2;//error를 발생시키지는 않지면 변경되지 않음
Obj2.props2[1] = 4;//props2의 참조형데이터가 변경되며, freeze가 바로밑의 프로퍼티만 적용된다는 것을 알 수 있다.

//Deep copy
var a ={
    a: 1,
    b: [1,2,3],
    c: {d:1, e:2}
}
var b = Object.assign({},a)
b //{a:1,b:[1,2,3],c:{d:1.e:2}} 얕은복사
b.b[1] = 20;
console.log(a.b); [1,20,3]//b.b를 변경했지만 a.b의 값도 변경된다.(얕은복사, 프로퍼티의 메모리만 가져옴)

b.b = Object.assign([], a.b);//Object.assign을 이용하여 일일히 깊은복사를 해줘야만 한다
b.b[1] = 20;
console.log(b);//{a:1,b:[1,20,3],c:{d:1.e:2}}
console.log(a);//{a:1,b:[1,2,3],c:{d:1.e:2}}


//for문에서의 주의사항
var obj = {
    props1: 1,
    props2: 2,
    props3: 3
}
for(const prop in obj){
    console.log(prop) //prop1, prop2, prop3
}
    //이런식으로 동작한다.
    {
        const prop = obj[keys[0]]
        console.log(prop)
    }
    {
        const prop = obj[keys[1]]
        console.log(prop)
    }
    {
        const prop = obj[keys[2]]
        console.log(prop)
    }

//전역객체의 프로퍼티?
var a = 10
console.log(window.a) //10
console.log(a) //10
delete a //false
console.log(window.a) //10
console.log(a) //10
delete window.a //false
    //전역공간에서 var를 선언한 변수는 전역변수임과 동시에 전역객체의 프로퍼티가 된다. => 삭제불가

window.a = 10;
console.log(a) //10
delete a //true
    //전역변수의 선언을 최소화 해야한다.
