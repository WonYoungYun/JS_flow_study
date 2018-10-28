const a = 'abc'
const b = "abc"
const c = `abc`

a === b //true
b === c //true
a === c //true

const str = `${a} + ${b}`
console.log(str) // abc + abc

//``의 중복사용
console.log(`Foo ${`bar`}`) //Foo bar


//html템플릿으로서도 사용가능
function a() {
    return `<div></div>`
}



//map
const a = [1,2,3]
const b = a.map((v, i, arr)=>{
    console.log(v, i, arr, this)
    return this[0] + v;
}, [10])
b //[11,12,13]

//reduce
const arr = [1,2,3]
const res1 = arr.reduce((a,b,i) =>{
    console.log(a,b,i) //10 1 0
                       //11 2 1
                       //12 3 2
    return p + c
}, 10)
res //16    16=10+1+2+3

const res2 = arr.reduce((a,b,i) =>{
    console.log(a,b,i) //1 2 1
                       //3 3 2
    return p + c
}) 
res //6 1+2+3

const sum1 = a.reduce((a,c) => a+c )//6 reduce를 이용하여 간결하게 표현가능