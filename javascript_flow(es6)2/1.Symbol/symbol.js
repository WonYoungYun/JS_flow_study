//Symbol
    const sb1 = Symbol()
    const sb2 = Symbol()

    sb1 === sb2 //false
    sb1 == sb2 //false 비교자체가 불가능

    const sb3 = Symbol('a')
    const sb4 = Symbol('a')
    sb3 === sb4//false
    sb3 == sb4 //false 매번 만들때 마다 새로워 진다.



    const x = () =>{
        const a = Symbol('b')
        return {
            [a]:10,
            //a
        }
    }
    const y = x()
    y //Symbol(a):10 이 담긴것이 보인다.
    y.a//error 하지만 접근이 되지 않음
    //만약 a프로퍼티를 밖에 꺼내주면 접근이 가능함 => 프로퍼티의 은닉화


    const NAME = Symbol('이름')
    const GENDER = Symbol('성별')
    const me = {
        [NAME] : '나',
        [GENDER] : 'male',
        age: 10
    }
    const you = {
        [NAME] : '너',
        [GENDER] : 'female',
        age: 10
    }
    console.log(me,you)//{ age: 10, [Symbol(이름)]: '나', [Symbol(성별)]: 'male' } { age: 10, [Symbol(이름)]: '너', [Symbol(성별)]: 'female' }

//private Memeber, why? 실수방지
    const obj = (()=>{
        const _privateMember1 = Symbol('private1')
        const _privateMember2 = Symbol('private1')
        return {
            [_privateMember1]: '외부에서 보이지만 접근할 방법이 없다.',
            [_privateMember2]: 10,
            publicMember1: 20,
            publicMember2: 30
        }
    })()

    console.log(obj)
    console.log(obj[Symbol('private1')])//undefined
    //console.log(obj[_privateMember1])//error

//Symbol.for = 공유심볼
    const obj2 = Symbol.for('abc')
    const obj3 = Symbol.for('abc')
    obj2 === obj3 //true

    const obj4 = (()=> {
        const COMMON1 = Symbol.for('공유심볼')
        return {
            [COMMON1]: ' 공유할 프로퍼티 키값이다. 어디서든 접근 가능하다.'
        }
    })()
    obj4//확인가능
    obj4[Symbol.for('공유심볼')]//접근 가능



    const keys = ['ADD_TODO', 'DELETE_TODO']

    const Constants = {}
    keys.forEach(v => {Constants[Symbol.for(v)] = v})

//Symbol.split

    const str = '이 _ 문자열을 _ 이렇게 _ 나누어줬으면 _ 좋겠다'
    console.log(str.split(' _ '))//[ '이', '문자열을', '이렇게', '나누어줬으면', '좋겠다' ]

    //
    String.prototype[Symbol.split] = function(string){
            let result = ''
            let residue = string
            let index = 0
            do{
                index = residue.indexOf(this)
                if(index <= -1){
                    break
                }
                result += residue.substr(0, index) + '/'
                residue = residue.substr(index + this.length)
            } while(true)
            result += residue
            return result
        }
    console.log(str.split(' _ '))

    //
    class Person{
        constructor (name) {this.name = name}
    }
    const my = new Person('나')
    console.log(my.toString())

    Person.prototype[Symbol.toStringTag] = 'PERSON'
    console.log(my.toString())