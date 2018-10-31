//2. Promise Chaining
new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('첫번째 promise')
    }, 1000)//1초뒤에 resolve
})
.then(res => {
    console.log(res)//
    return '두번째 promise'
})
.then(res =>{
    console.log(res)
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('세번째 promise')
        }, 1000)//1초뒤에 resolve가되고 then을 탄다.
    })
})
.then(res =>{
    console.log(res)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('네번째 promise')
        },1000)//reject 상태기 때문에 다음 then을 무시하고 catch로 간다.
    })
})
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.error(err)
    return new Error('이 에러는 then에 잡힌다.')//일반값을 리턴했기 떄문에 promise가 아님으로 .then으로 간다.
})
.then(res =>{
    console.log(res)//여기서 위의 error출력
    throw new Error('이 에러는 catch에 잡힌다.')//throw를 하려고 해도 Promise에 엮이기 때문에 catch로 간다.
})
.then(res =>{
    console.log('출력 안됨')
})
.catch(err =>{
    console.error(err)
})

//.then 이나 .catch 안에서
//1. return promise 인스턴스 : promise 인스턴스가 리턴된것 (return new Promise() or return Promise.resolve())
//2. return 일반값 : promise 객체에 resolved 상태로 반환됨, 그 안에 값이 담김 (Promise {<<resolved>>: 값})
//3. return 안하면 : return undefined (원래 JS동작) -> 2번과 같다.
//4. Promise.resolve() or Promise.reject() : return 해주지 않는 이상 의미없음 
    //별개의 Promise 객체가 생성될 뿐, 현재 Procee상의 Promise 플로우에 영향을 주지 않음
    //return 한거는 1번과 같다.

//한번 Promise는 영원한 Promise, 에러메시지가 나와도 중단시킬수 없다.
