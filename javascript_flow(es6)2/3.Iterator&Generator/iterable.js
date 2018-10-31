//iterable
//내부 요소들을 공개적으로 탐색(반복)할 수 있는 데이터 구조
//[Symbol.iteator] 메소드를 가지고 있다.
//array, set, map이 iterable하다

//iterable한 객체의 특징
    const arr = [1,2,3]
    const map = new Map([['a',1],['b',2],['c',3]])
    const set = new Set([1,2,3])
    const str = '문자열도 가능'
    const gene = (function* () {
        yield 1
        yield 2
        yield 3
    })()

    Array.from(arr);//iterable한 객체를 array로 만듬
    [...arr]//iterable한 객체는 모두 spread를 사용 할 수 있다.
    const [arrA, ,arrc] = arr//해체 할당도 가능하다.


    //Symbol.iterator
    const iter = arr[Symbol.iterator]();

    console.log(iter.next())//{ value: 1, done: false }
        //next 를 실행할 때마다 value와 done을 반환

    //Array.from, spread operator, 해체할당, 모두 동작원리가 비슷하다.
    // 변수에 iterable한 객체의 Symbol.iterator를 담은 다음. .next()를 done이 true가 되기 전까지 반복호출한다.


    //
    const makeGenerator = iterable => function*(){
        yield* iterable;//iterable한 객체는 yield*뒤에도 올 수있다.
    }


    //iterable한 개체를 인자로 받을 수 있는 개체
    /*
    new Map()
    new Set()
    new WeakMap() //자체는 iterable하지 않음
    new WeakSet() //자체는 iterable하지 않음
    Promise.all()
    Promise.race()
    Array.from()
    */