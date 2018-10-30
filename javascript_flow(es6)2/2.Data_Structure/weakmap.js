//Map과의 비교
    //Map에 객체를 키로 하는 데이터를 추가할 경우 Map에도 해당 객체에 대한 참조가 연결되어, 여타의 참조가 없어지더라도 Map에는 객체가 여전히 살아있음.
    //한편 WeakMap은 객체에 대한 참조카운트를 올리지 않아(약한 참조), 여타의 참조가 없어질 경우 WeakMap 내의 객체는 G.C의 대상이 된다.

    //Map
    let obj = {a:1}//참조 카운트1
    const map = new Map()
    map.set(obj, 10)//참조 카운트2
    console.log(map)
    obj = null//참조 카운트1
    console.log(map)

    //WeakMap
    let obj2 = {b:2}
    const wMap = new WeakMap()
    wMap.set(obj2, 20)
    console.log(wMap)
    obj2 = null
    console.log(wMap)//아무튼 사라짐, G.C가 처리하면 사라짐
    
//WeakMap
    //1. 참조형 데이터만 키로 설정할 수 있다.
    const keysArray = [{a:1},[1,2,3],()=>{}]
    const wmap2 = new WeakMap()
    keysArray.forEach((v,i) =>{
        wmap2.set(v,i)
        console.log(wmap2.get(v))
    })
    //iterable 하지않다.
    //for ... of 사용불가
    //size 프로퍼티 없음
    //keys(), values(), entries(), clear()등 사용 불가

//활용사례
    //비공개 객체 멤버
    const weakmapValueAdder = (wmap, key, addValue) =>{
        wmap.set(key,Object.assign({}, wmap.get(key), addValue))
    }
    const Person = (() =>{
        const privateMembers = new WeakMap()
        return class {
            constructor(n,a){
                privateMembers.set(this, {name:n, age: a})
                console.log(privateMembers)
            }
            set name(n){
                weakmapValueAdder(privateMembers, this, {name:n})
            }
            get name(){
                return privateMembers.get(this).name
            }
            set age(a){
                weakmapValueAdder(privateMembers, this, {age:a})
            }
            get age(){
                return privateMembers.get(this).age
            }
        }//this를 키로하기때문에 instance가 생존하는 동안 살아있음
    })()

    const me = new Person('이름', 10)
    console.log(me.name, me.age, me)//나 자체는 빈개체임 

    const you = new Person('당신', 10)
    console.log(you.name, you.age, you)//나 자체는 빈개체임
    
    console.log(me === you)
    //둘다 같은 빈객체를 key로 가지고 있지만 me와 you의 각자 인스턴스의 빈객체이기 때문에 다른 빈객체이다. 완벽한 은닉화


    
    //Symbol로 private 변수를 만들경우 private 하더라도 접근할 방법이 있었다. WeakMap을 이용하면 된다.
