const s = new WeakSet() //참조카운트를 증가시키지 않는다.

let o = {}//o라는 변수가 {}요런 객체를 참조한다 => 참조카운트가 1이 된다.
let o2 = o//o2라는 변수가 o를 통해 {}객체를 참조 => 참조카운트가 2
o2 = null//o2에 null이 들어가면서 -> {}객체의 참조카운트는 1이 된다.

s.add(o)// o라는 변수가 가르키는 {}를 s에 추가헀지만, 참조카운트는 1이다.
//즉 WeakSet은 참조하지만 참조하는 사실을 알리지않은 약한 set
//o = null; //{}의 참조카운트가 0이된다. 즉 Garbage Collector의 수거대상이 되며, 되고나면 s에는 아무것도 없게 된다.

//WeakSet은 .keys(), .values(), .entries(), .size, .forEach, for...of 사용불가

s.has(o)//has는 사용가능
console.log(s)


//대체 왜쓰는가? 글쎼...


