//간결한 메소드

const obj = {
    name: 'foo',
    getName1: function(){return this.name},//실행 종료 후에도 null로 접근됨
    getName2() {return this.name}//실행 종료후 접근 불가
    //기존함수는 생성자를 사용할 수 있었지만 축약형은 사용할 수 없다.
    //생성자함수로서의 제한(prototype이 제거됨으로서 함수가 가벼워짐, 성능up)
}


//super명령어로 상위 클래스에 접근 가능
const Person = {
    greeting () {return 'Hello'}
}
const Friend = {
    greeting () {
        return 'hi, ' + super.greeting()
    }
}
Object.setPrototypeOf(Friend, Person)
Friend.greeting();//hi hello
Friend.__proto__.greeting(); //hello