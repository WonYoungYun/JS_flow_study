//매개변수 기본값

//함수의 인자에 초기값을 설정해 주는 것으로, 인자를 함수안의 변수로 할당하는 것과 같은 효과를 가진다.

const f = function (x,y,z) {
    x = x ? x : 4
    y = y || 5
    if(!z) {
        z = 6
    }
    console.log(x, y, z)
}
f(0, null) //4,5,6


const f2 = function(x=4,y=5,z=6){
    console.log(x,y,z)// null 0 6
}
f2(null, 0, undefined)


const notValid = function(){
    console.error('notValid called')
    return
}
const sum = function(x = notValid,y = notValid()){
    console.log(x+y)
}
sum(1,2)
sum(1)


//let a = a; a is not defined
    //왜 에러가 생기는가? 
    //아직 a는 주소가 매칭되어있지 않았기 때문에 TDZ에 걸리게 되고 에러가 생긴다.



const a = function(a=1,b=2,c=3){
    console.log(arguments)//유사배열객체(array-like object): 객체인데 각 프로퍼티의 키가 인덱스이고, length라는 프로퍼티가 있는 객체
    //console.log(arguments.pop()) //객체이기 때문에 배열함수 pop이 적용되지 않음, 따라서 Array.prototype.pop.call(arguments)를 사용해서 적용시켜야 한다.
}
a() //{} 유사배열객체에도 영향을 주지만, es6에서는 arguemnts를 쓰지않는다. 
