//tag 함수

const tag = (strs, arg1, arg2) => {
    return {strs: strs, args: {arg1,arg2}}
}
const res = tag `순서가 ${1}이렇게 ${2}`
console.log(res) //{ strs: [ '순서가 ', '이렇게 ', '' ], args: { arg1: 1, arg2: 2 } }

const res2 = tag `${1}이렇게 ${2}`
console.log(res2) //{ strs: [ '', '이렇게 ', '' ], args: { arg1: 1, arg2: 2 } }


//천단위에 ,를 찍어주는 코드
const setDecimalSeperators = (strs, ...args) => {
    return args.reduce((p,c,i) => {
        return p + strs[i] + (c+'').replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
    }, '') + strs[strs.length -1]
}
const res3 = setDecimalSeperators `이 물건은 하나에 ${1000}원이고, ${2000}개를 구입하면 총${2000*1000}원 이다.`
console.log(res3)


//string.raw
console.log(`Hello\nWorld!`)
console.log(String.raw `Hello\nWorld!`)
console.log(String.raw `Hello
World!`)
    // Hello
    // World!
    // Hello\nWorld!
    // Hello
    // World!