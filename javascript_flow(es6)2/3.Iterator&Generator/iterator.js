//iterator
//반복을 위해 설계된 특별한 인터페이스를 가진 객체,
//객체 내부에는 next() 메소드가 있는데 next()메소드는 value와 done 프로퍼티를 지닌 객체를 반환하다. done 프로퍼티는 boolean 값이다.

const iter = {
    items: [10,20,30],
    count: 0,
    next(){
        const done = this.count >= this.items.length
        return{
            done,
            value: !done ? this.items[this.count++]:undefined
        }
    }
}

console.log(iter.next())

//
const obj1 = {
    a:1,
    b:2,
    c:3,
    [Symbol.iterator](){
        return iter
    }
}

console.log([...obj1])

//iterable한 객체인지 확인
const isIterable = target => !!target[Symbol.iterator]
console.log(isIterable({}))
console.log(isIterable([]))


//실행하면 done이 false이기때문에 무한반복되어 stackoverflow가 일어남
// const createIterator = () => {
//     return {
//         next() {
//             return {
//                 done: false
//             }
//         }
//     }
// }
// const obj = {
//     [Symbol.iterator]: createIterator
// }
// console.log(...obj);
//
const obj2 = {
    [Symbol.iterator](){
        return this
    },
    val: 0,
    next(){
        return{
            done:this.val >=5,
            value: this.val++
        }
    }
}
console.log(...obj2)

    //obj는 [Symbol.iterator] 메소드가 없는데 [Symbol.iterator] 메소드를 추가해주면 iterable한데, 그 메소드가 iterator를 반환해야 하고, 그 iterator는 next 메소드를 가진 객체여야 되며, next메소드는 다시 value와 done 프로퍼티를 가진 객체를 반환해야 한다. 그러면 obj는 iterable해진다.  

//객체 내부에 직접 할당
const obj3 = {
    a:1,
    b:2,
    c:3,
    d:4,
    [Symbol.iterator](){
        let count = 0
        const items = Object.entries(this)
        return {
            next(){
                return {
                    done: count >= items.length,
                    value: items[count++]
                }
            }
        }
    }
}
console.log(...obj3)

//Symbol.iteraotr 메소드의 내용을 요구사항에 맞추어 구현하기만 하면 iterable한 객체이다. => Duck type Protocol