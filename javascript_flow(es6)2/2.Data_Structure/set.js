//set 중복배제 가능
    //#1
    const a = [1,2,3,5,4,3,2,5,4]

    const b = a.reduce((a,v) => {
        if(a.includes(v)) return a
        a.push(v)
        return a
    }, [])
    console.log(b) //[ 1, 2, 3, 5, 4 ]

    const c = new Set(a)
    console.log(c)//Set { 1, 2, 3, 5, 4 }

//중복허용 X 순서를 보장하는, 값들로만 이루어진 리스트
//추가, 삭제, 초기화, 요소의 총 개수, 포함여부 확인

const set = new Set()
set.add(5)
set.add('5')
set.add(-0)
set.add(+0)
console.log(set)
console.log(set.has(5))
set.delete(5)
//set은 index라는 개념이 없다

set.clear()//전체 삭제

set.keys() //Iterator반환 
set.values() //Iterator반환 
set.entries()//Iterator반환 

const s = new Set([1,2,3,4,5])//초기에 배열을 넣어 정의할 수 있다.
const ss = new Set([...s])//이터러블한 객체를 펼쳐 새로 set을 만들 수 있다.

s.forEach(function(key, value, ownerSet){
    console.log(key, value, this)
}, {})//set의 값은 key이자 value임
//하나하나 돌리며 별도의 동작을 할 때 사용한다. 순회를 돌릴때 특화

    //#1의 코드를 set을 이용해 간단히 표현
    const arr = [1,2,3,5,4,3,2,5,4]
    const newArr = [...new Set(arr)]
    console.log(newArr)


//array보다 set이 더 유용한 경우
    //1. 중복제거
    //2. 전체순회할 필요성이 있는 경우
    //3. 값의 유무 판단

//array가 set보다 더 유용한 경우
    //1. 특정요소에 접근
    //2. 인덱스가 필요한 경우