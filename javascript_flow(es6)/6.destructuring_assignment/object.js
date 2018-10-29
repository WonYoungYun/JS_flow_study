//객체 해제할당

//{추출할 프로퍼티명 : 할당하고자 하는 변수명}
    const me = {
        name: '나',
        age: 10,
        gender: 'male'
    }

    const {
        name,
        age,
        gender
    } = me
    console.log(name,age,gender)

//중첩객체의 경우
    const loginInfo = {
        device: {
            createdAt: '2018-10-29',
            deviceId: '000000XA',
            deviceType: 'desktop'
        },
        user: {
            createdAt: '2018-10-30',
            email: 'aaa@bbb.com',
            name: '나',
            nickname: '이름',
            phoneNumber: '111-222-333'
        }
    }

    const {
        device: {
            createdAt,
            deviceId,
            deviceType
        },
        user:userInfo,
        user:{
            createdAt: userCreatedAt,
            email,
            name: name2
        }
    } =loginInfo;
    //user는 그저 접근자이기 때문에 중복 선언 가능
    userInfo//loginInfo의 user객체
    createdAt//'2018-10-29'
    deviceId//'000000XA'
    userCreatedAt//2018-10-30

    /*
    const {
        device,
        user:{
            createdAt: userCreatedAt,
            email,
            name
        }
    } = {
        device: {
            createdAt: '2018-10-29',
            deviceId: '000000XA',
            deviceType: 'desktop'
        },
        user: {
            createdAt: '2018-10-30',
            email: 'aaa@bbb.com',
            name: '나',
            nickname: '이름',
            phoneNumber: '111-222-333'
        }
    }
    */

//default Parameter와의 연동
    const phone ={
        name: 'galaxy',
        color: undefined
    }
    const{
        name: n,
        version: v = '9+',
        color: c = 'purple'
    } = phone

    console.log(n, v, c) //galaxy 9+ purple

//사용 예제
    //1
    const deliveryProduct = {
        orderedDate: '2018-01-15',
        estimatedDate: '2018-01-20',
        status: '배송중',
        items: [
            {name: '사과', price:1000, quantity:3},
            {name: '참외', price:3000, quantity:2},
            {name: '수박', price:5000, quantity:4}
        ]
    }

    const{
        estimatedDate: esti,
        status,
        items: [, ...products]
    } = deliveryProduct

    console.log(esti,status, products)



    //2. url 파싱
    const getUrlParts = (url) => /^(http?):\/\/(abc\.com)(\/es6\/([a-z0-7-\-.,]+))$/.exec(url)

    const[,protocol,host,,title] = getUrlParts('http://abc.com/es6/7-1.destructuring')
    console.log(protocol, host,title)

    //3. 넓이
    const getArea = ({width, height} = {width:0, height:0}) => {
        return width * height
    }
    // const getArea = ({width, height = width}) => {
    //     return width * height
    // }
    
    console.log(getArea({width:10, height:50}))


    //4.
    const user = {
        name: '이름'
    }
    const des = ({name, nickname = name}) =>{
        return [name, nickname]
    }

    console.log(des(user))
