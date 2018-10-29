//계산된 프로퍼티명

//기존의 대괄호 표기법
const className = 'aaa'
const obj = {}
obj['A' + className] = 'A급'


//객체 리터럴 선언시 프로퍼티 키값에 대괄호 표기로 접근가능
//대괄호 내에는 값 또는 식을 넣어 조합이 가능하다.
const obj2 = {
    ['A' + className]: 'A급'
}

const count = ((c) => () => c++)(0)
const obj3 = {
    [`a_${count()}`]: count(),
    [`a_${count()}`]: count(),
    [`a_${count()}`]: count()
}
console.log(obj3)//{ a_0: 1, a_2: 3, a_4: 5 }

