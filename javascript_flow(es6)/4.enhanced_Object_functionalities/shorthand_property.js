//프로퍼티 축약

let x = 10
let y = 20
let obj = {
    x : x,
    y : y
}
let obj2 = {
    x,
    y
}
//프로퍼티의 key와 value에 할당할 변수명이 동일한 경우, value생략가능

const convertExtension = (fullFileName) => {
    const fullFileNameArr =fullFileName.split('.')
    const fileName = fullFileNameArr[0]
    const ext = fullFileNameArr[1] && fullFileNameArr[1] === 'png' ? 'jpg' : 'gif'
    return {
        fileName,
        ext
    }
}
convertExtension('abc.png')

//destructuring assignment
const {
    name,
    age
} = {
    name: '이름',
    age: 20
}
console.log(name,age)