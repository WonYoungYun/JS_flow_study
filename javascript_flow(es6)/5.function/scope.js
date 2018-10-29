

//chrome, firefox
a()//error
if(true){
    a()//true
    function a() {console.log(true)}
}
a()//ture

//safari
a()//true
if(true){
    a()//true
    function a() {console.log(true)}
}
a()//ture


//왜 이런일이 생길까? function이 블록스코프에 제한되는지 함수스코프에 제한되는지가 ES6가 도입되면서 브라우저별로 달라졌다.



//chrome, firefox, safari
'use strict';
if(true){
    a()//true
    function a() {console.log(true)}
}
a()//error

//strict 모드가 아닌경우 즉 sloppy mode에서는 브라우저 마다 다르게 움직임
//strict mode: 함수선언문도 블락스코프에 갇힌다.
//strict mode에 대한 해석이 브라우저마다 달라지기 때문에 이러한 현상이 생김

//arrow function쓰고
//메소드 축약형 쓰고
//class 쓰자
//'function*': generator