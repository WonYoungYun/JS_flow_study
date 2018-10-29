//destructuring assignment(해체할당, 구조분해할당, 디스트럭쳐링)

//배열 해체할당
    var colors = ['red', 'white', 'orange']
    // const first = colors[0]
    // const second = colors[1]
    // const third = colors[2]
    let [first, second, third] = colors;
    console.log(first, second, third) //red white orange

    let[,second2] = colors;//white, 하나만 추출가능

    let[,,third2] =colors;//orange

    let[,,third3 ]= ['red', 'white', 'orange']//orange

    let[,,third4,fourth1] = colors//orange, undefined  매칭할게 없다면 undefined

//rest Parameter와의 연동
    const arr = [1,2,3,4,5]
    const [a,...b] = arr 
    const[,,...c]=arr
    console.log(a,b,c)//a = 1, b=[2,3,4,5], c=[3,4,5]

//default Parameter와의 연동
    const [a=10,b=20] = [undefined, 5] //a=10, b=5
    const [c,d=c*2] = [5] //c=5 d=10
    const [e=f, f] = [undefined, 10]//TDZ에 걸려 Error반환
    const arr2=[1[2,[3,4],5],6]
    const [a1, [b1, [,c1],d1]]=arr2 //1 2 4 6

//값 교환하기
    var a2 = 10
    var b2 = 20

    var temp = a2;
    a2 = b2;
    b2 = temp;
    //이렇게 했지만...
    
    [b,a] = [a,b]
    //를 통해 간단하게 변경가능