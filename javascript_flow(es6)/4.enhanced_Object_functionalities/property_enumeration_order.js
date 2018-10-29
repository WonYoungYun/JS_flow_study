const obj1 = {
    c: 1,
    2: 2,
    a: 3,
    0: 4,
    b: 5,
    1: 6
}
const keys1 = []
for(const key in obj1){
    keys1.push(key)
}
keys1//["0","1","2","c","a","b"] 정렬되어 나옴, 숫자가 먼저오고, 작은수에서 큰수의 순서로, 문자열이 입력된 순서 그대로

const obj2 = {
    [Symbol('2')]: true,
    '02': true,
    '10': true,
    '01': true,
    '2': true,
    [Symbol('1')]: true
}
const keys2 = []
for(const key in obj2){
    keys2.push(key)
}
console.log(keys2)//["2","10","02","01"] //숫자인데 첫글자가 0이 아닌경우 -> 숫자로 인식, 


const obj3 = Object.assign({}, obj1, obj2)
const keys3 = []
for(const key in obj3){
    keys3.push(key)
}
console.log(keys3)//["0","1","2","10","c","a","b","02","01"]


console.log(Reflect.ownKeys(obj3))//["0","1","2","10","c","a","b","02","01", Symbol(2), Symbole(1)]

//객체의 열거순서: 숫자를 오름차순, 문자열을 입력된 순서, 심볼을 입력된 순서
//0이상의, 첫자리가 0이 아닌 수는 문자열로 입력해도 숫자로 인식한다.
//첫째자리가 0인 두자리 이상의 숫자는 문자열로 입력해야 하고, 문자열로 인식한다.
//음수는 문자열로 입력해야하고, 문자열로 인식한다.


//Object.getOwnPropertyNames(), Reflect.ownKeys(), Obejct.assign()은 열거순서를 엄격히 지키지만
//ES5의 하위문법인 for in, Object,keys(), JSON.stringify()는 정합성을 보장하지 않는다.