//block scope
{
    let a =10
    {
        let a =20;
        console.log(a); //10
    }
    console.log(a)  //20
}
console.log(a)  //a is not defined

//TDZ
if(true){
    let a =10
    if(true){
        console.log(a) //a is not defined
        const a = 20
    }
    console.log(a)
}
console.log(a)

//this
var value = 0;
var obj = {
    value:1,
    setValue: function(){
        this.value =2; //this: obj -> obj.value =2;
        (function(){
            this.value=3;//this: window -> window.value=3;
        })();
    }
}
obj.serValue();
console.log(value); //3
console.log(obj.value); //2

let value = 0;
let obj = {
    value:1,
    setValue: function(){
        this.value =2;
        {
            this.value = 3;//블록스코프를 사용하면 this는 그대로 가져올 수 있다.
        }
    }
}
obj.setValue();
console.log(value); //0
console.log(obj.value); //3


//모든 문 형태에 적용
{
    let a =2
    if(a>1){
        let b = a* 3;
        console.log(b); //6
    } else{
        let b =a/3;
        console.log(b); //2/3
    }
    console.log(b); //b is not defined
}
console.log(a);//a is not defined

var sum =0
for(let i = 1; i<=10; i++){
    sum +=1
}
console.log(sum) //55
console.log(i)  //i is not defined