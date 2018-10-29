//전개 연산자

const birds = ['eagle', 'pigeon']
const mamals = ['rabbit', 'cat']
const animals = birds.concat('whale').concat(mamals)
console.log(animals)
const animals2 = [...birds, 'whale', ...mamals]
console.log(animals2)

//배열의 각 인자를 펼친 효과
const values = [20,10,30,50,40]
console.log(...values)
console.log(Math.max(...values))

//앞뒤로 다른 값들을 함께 사용할 수도 있다.
const values2 = [3,4,5,6,7,8]
const sum = (...args) => args.reduce((p,c) => p+c)
console.log(sum(1,2, ...values2, 9 ,10))

//이터러블한 데이터는 모두 펼칠 수 있다.
const str = 'hello'
const splitArr =str.split('')
const restArr = [...str]

//push, unshift, concat등의 기능을 대체
let originalArr = [2,3]
const preArr = [-2,-1]
const sufArr = [6,7]

originalArr.unshift(1)//원래배열
originalArr.push(4)//원래배열

originalArr=[0, ...originalArr,5]//새로운배열, 새로운배열을 만들지만 원래배열보다 비용이 덜 소모된다.
console.log(originalArr)

//얕은복사만을 수행
let originalArray = [{
    first: 'Hello,',
    second:'World!'
}, {
    first: 'Welcome ',
    second: 'ES6'
}]

let copiedArray = [...originalArray]
console.log(originalArray[0].first)

copiedArray[0].first ="Hi,"
console.log(originalArray[0].first)


//tc39 ECMAScript지정하는 위원회
//es6이후 매년 기능을 추가하려 하고 있음
//proposal
//0단계부터 4단계까지
//제안, 검토, 구체화, 도입예정, 도입확정의 단계
//spread는 현재 도입확정이다.