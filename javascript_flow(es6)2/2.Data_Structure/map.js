//객체의 단점
    //1.iterable하지 않다
    const o = {a:1, b:2, c:3}

    Object.prototype.method = function() {}
    for(let key in o ){
        console.log(key, o[key])
    }//프로토 타입까지 출력하기때문에 iterable한 것처럼만 보인다.
    //객체에 있는 모든 요소를 가져와 key라는 변수에 할당하라고 구현했지만, 객체고유의 프로퍼티인지 프로토타입 chaining의 method인지 구분하지 않음.

    for(let key in o ){
        if(o.hasOwnProperty(key))
        console.log(key, o[key])
    }
    //2.키를 문자열로 취급한다.
    const obj = {
        1:10,
        2:20,
        3:30
    }
    let res = 0
    for (let key in obj){
        res += key
    }
    console.log(res)//0123

    const obj2 = {
        1: 10,
        01:20,
        '01':30   
    }
    console.log(obj2)//{ '1': 20, '01': 30 } cascading 되버림
    
    //프로퍼티의 수를 직접파악할수 없음
    //obj.length가 불가
    Object.keys(obj).length

//Map
    //1. [Key,Value]쌍으로 이루어진 요소들의 집합
    //2. 순서를 보장하며 iterable 하다.
    //3. 키에는 어떤 데이터타입도 저장할 수 있으며, 문자열로 취급하지 않는다.

    const map = new Map()
    map.set(1,20)
    map.set('01', 30)
    map.set({},40)
    map.set(()=>{},50)
    console.log(map)

    map.size
    console.log(map.get(1))
    map.delete(1)
    console.log(map)
    console.log(map.has('01'))


    //초기값 지정
    const arr = [[10,10], ['10','10'],[false,true]]//iterable한 요소들의 각 요소들이 배열로 이루어져 있어야 한다.
    const map1 = new Map(arr)
    console.log(map1)
    console.log(map1.keys())
    console.log(map1.values())
    console.log(map1.entries())

    //배열로 전환
    const mapArray1 = [...map1]
    const mapArray2 = [...map1.keys()]
    const mapArray3 = [...map1.values()]
    const mapArray4 = [...map1.entries()]

    //Object.keys(), Object.values(), Object.entries()는 배열을 반환
    //set,map의 keys(), values(), entries()는 iterator를 반환한다.

    //객체로 전환
    const map2 = new Map([[10,10], ['10','10'],[false,true]])
    const convertMapToObject = map =>{
        const resultObj = {};
        [...map].forEach(([k,v]) =>{
            if(typeof k !== 'object'){
                resultObj[k] = v
            }
        })
        return resultObj
    }
    const obj3 = convertMapToObject(map2)
    console.log(obj3)//{ '10': '10', false: true }