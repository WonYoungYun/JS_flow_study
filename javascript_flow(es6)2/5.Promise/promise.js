//promise
//promise를 통해 callback hell을 벗어날 수 있다.
//JSON parsing을 자동으로 처리해주는 axios를 사용하기도함

//Promise status
//unsettled(미확정) 상태: pending, thenable 하지 않다.
//setteld(확정) 상태: resolved, thenable한 상태
    //fulfilled(성공)
    //rejected(실패)

const promiseTest = (param,delay)=> new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(param){
            resolve('성공')
        } else{
            reject(Error('실패!'))
        }
    }, delay)
})

const testRun = (param, delay) => promiseTest(param, delay)
    .then(text => {console.log(text)})
    .catch(error => {console.error(error)})
    
    // 이렇게도 가능하다.
    // const testRun = (param, delay) => promiseTest(param, delay)
    // .then(text => {console.log(text)}, error => {console.error(error)})

const a = testRun(true, 1000)
//const b = testRun(false, 2000)

//문법
    //new Promise(function)
    //.then(), .catch()는 언제나 promise를 반환한다.
    const simplePromiseBuilder2 = value =>{
        return new Promise((resolve, reject) =>{
            if(value){resolve(value)}
            else{reject(value)}
        })
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
    }

    simplePromiseBuilder2(1).then(res=>{console.log('이어서 무언가가 이루어진다.')})

//실행과정
    const prom = new Promise((resolve, reject)=>{
        resolve()
        reject()
        console.log('Promise')
    })
    prom.then(()=>{
        console.log('then')
    })
    prom.catch(()=>{
        console.log('catch')
    })
    console.log('Hi')//Promise Hi then 순으로 진행
    //Queue: 전체소스실행하는 과정에서 Promise인스턴스의 함수도 같이 실행되었다. 
    //-> fulfilled가 되면서 then함수가 queue에 추가됨
    //-> 계속 전체소스실행이 끝나고 나서
    //-> 다음번 큐에 있는 then함수가 실행됨

    //then이나 catch구문은 실행큐에 후순위로 등록되고 실행된다.
    //promise 인스턴스에 넘긴 함수 내부에서는, resolve나 reject 둘중 먼저 호출한 것만 실제로 실행된다.
    //사실 실제로 실행되는 것이 아니라, 실행은 둘다 되는데 pending상태일 때만의미가 있기 때문에 하나만 실행된것 처럼 보이는것


//확장 Promise
    Promise.resolve(20)
        .then(res => {console.log(res)})
        .catch(err => {console.error(err)})

    // Promise.reject(12)
    //     .then(res => console.log(res))
    //     .catch(err=> {console.log(err)})
    
    //1.thenable객체
    //객체인데 then이 있고 resolve,reject가 있다면 thenable하다
    // const thenable = {
    //     then(resolve, reject){
    //         reject(33)
    //     }
    // }
    // const prom1 = Promise.resolve(thenable)
