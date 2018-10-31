// const ajaxCalls = () =>{
//     const res1 = fetch.get('https://api.gitgub.com/users?since=1000')
//     const res2 = fetech.get('https://api.github.com/user/')
// }
// const m = ajaxCalls()

//server request 보내고,
//server에서 response 온다. 응답시간은 천차만별,
//res1에는 requrest를 하자마자 바로 결과가 담긴다, 즉 response된 결과가 담기는게 아니라, 불필요한 데이터가 담기게 된다.

//1.콜백방식의 비동기처리,
//2.Promise방식의 비동기처리
//3.Generator방식의 비동기처리
const fetchWrapper = (gen,url) => fetch(url)
    .then(res => res.json())
    .then(res => gen.next(res))

function* getNthUserInfo(){
    const [gen, from, nth] = yield
    const req1 = yield fetchWrapper(gen, `https://api.github.com/users?since=${from || 0}`)
    const userId = req1[nth -1 || 0].id
    console.log(userId)
    const req2 = yield fetchWrapper(gen, `https://api.github.com/user/${userId}`)
    console.log(req2)
}
const runGenerator = (generator, ...rest) => {
    const gen = generator()
    gen.next()
    gen.next([gen, ...rest])
}

console.log(runGenerator(getNthUserInfo, 1000, 4))
console.log(runGenerator(getNthUserInfo, 1000, 6))




