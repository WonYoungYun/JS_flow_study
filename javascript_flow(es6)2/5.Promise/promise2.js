
//Error Handling

// asyncThing1()
// .then(asyncThing2)
// .then(asyncThing3)
// .catch(asyncRecovery1)
// .then(asyncThing4, asyncRecovery2)
// .catch(err => {console.log("Don't worry about it")})
// .then(()=> {console.log("All done!")})

/*
    asyncThing1 --------
        |               |
        v               |
    asyncThing2 --------|
        |               |   
        v               v
    asyncThing3 ------> asyncRecovery1
        |               |       |
        |    ------------       |
        |    |                  |
        v    v                  v
    asyncThing4             asyncRecovery2
        |   |                   |       |
        |   |                   v       |
        |   ---> "Don'y worry about it" |
        |               |               |
        |      ----------               |
        |      |                        |
        v      v                        |
       "All done!"  <--------------------                        
*/

//Multi Handling
//1. Promise.all(iterable) : Array.prototype.every()
    //iterable의 모든 요소가 fullfilled되는 경우: 전체 결과값들을 배열 형태로 then에 전달.
    //iterable의 요소 중 일부가 rejected 되는 경우: 가장 먼저 rejected 되는 요소 '하나'의 결과를 catch에 전달
const arr = [
    1,
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('resolved after 1000ms')
        }, 0)
    }),
    'abc',
    () => 'not called function',
    (()=> 'IIFE')()
]
Promise.all(arr)
.then(res => {console.log(res)})
.catch(err => {console.error(err)})
    //1. 일반값은 그냥 resolved 된 값으로 간주,
    //2. iterable 내의 모든 요소들이 resolved된 순간에 다음번 then 호출, 이때 값은 iterable 실행 결과가 배열로 반환됨
    //3. iterable 내의 일부 요소가, 하나라도 reject되면, 그 순간 catch를 호출하며, reject된 값만 넘어온다.

//2. Promise.race(iterable) : Array.prototype.some()과 비슷한 느낌
    //1. 일반값은 그냥 resolved 된 값으로 간주
    //2. iterable 내의 요소중에 가장 먼저 resolved(then) 또는 rejected(catch)된 값을 반환함.
    const arr2=[
        new Promise(resolve =>{
            setTimeout(()=>{resolve('1번요소, 1000ms')}, 1000)
        }),
        new Promise(resolve =>{
            setTimeout(()=>{resolve('2번요소, 500ms')}, 500)
        }),
        new Promise(resolve =>{
            setTimeout(()=>{resolve('3번요소, 750ms')}, 750)
        }),
    ]
    Promise.race(arr2)
    .then(res => {console.log(res)})
    .catch(err => {console.error(err)})