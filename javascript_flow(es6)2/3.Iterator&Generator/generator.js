//generator
//중간에 멈췄다가 이어서 실행할 수 있는 함수
//function* 로 표현하며, yield 키워드를 활용
//함수 실행결과에 대해 next()메소드를 호출할 때마다 순차적으로 제너레이터 함수 내부의 yield 키워드를 만나기 전까지 실행하고 yield 키워드에서 정지한다.
//다시 next메소드를 호출하면 그 다음 yield 키워드를 만날 때까지 함수 내부의 내용을 진행하는 식이다.

function* generator(){
    console.log(1)
    yield 1
    console.log(2)
    yield 2
    console.log(3)
}
const gen = generator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


//선언
function* gene(){yield}
const obj={
    gene1: function* () {yield},
    *gene2 () {yield}
}

//이터레이터 로서의 제너레이터
console.log(...gen)

const obj1 = {
    a:1,
    b:2,
    c:3,
    *[Symbol.iterator](){
        for(let prop in this){
            yield[prop, this[prop]]
        }
    }
}
console.log(...obj1)
for(let p of obj1){
    console.log(p)
}

//generator 속 generator
function* gene3(){
    yield* [1,2,3]
    yield
    yield* 'abcde'
}
const gen1 = gene3();
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())

//인자 전달하기
function* gene4(){
    let first = yield 1
    let second = yield first + 2
    yield second + 3
}
const gen2 = gene4()
    //first는 호이스팅되서 tdz에 갇히고, yield에서 멈추고 1은 할당이안됨
console.log(gen2.next())
console.log(gen2.next())//first가 1이 아님
console.log(gen2.next(20))//second에 20이 할당되면서 23이 됨