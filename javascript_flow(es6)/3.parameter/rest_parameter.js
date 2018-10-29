//나머지 매개변수
//arguments를 대체할 파라미터
//매개변수앞 ...로 표기, 무조건 뒤에 와야하며 배열을 반환
function f(...z){
    console.log(z)
}
f(1,2,true,null,undefined,10)


//setter에 나머지 매개변수를 사용할 경우 error 발생
const obj = {
    _a: 'a',
    get a() {return this._a},
    set a(v){this._a = v;}
}
