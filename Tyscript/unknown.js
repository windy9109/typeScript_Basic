"use strict";
//unknown 
//: any가 가지고 있는 타입의 불안정한 요소를 해소하고자 나온 대체자 역할
//type 가드1
//const aNumber: number = maybe;
//'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
//type 가드2
//const maybe: true
if (maybe === true) { //if문안의 maybe는 ture
    const aBoolean = maybe;
    //maybe는 true이므로 string 에는 들어갈수없다.
    //const aString: string = maybe;
}
//type 가드3
//const maybe: string
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean: boolean = maybe;
}
//unknown
//타입스크립트 3.0부터 지원
//any와 짝으로 any보다 Type-safe한 타입
//any와 같이 아무거나 할당할수 있다.
//컴파일러가 타입을 추론할수 있게끔 타입의 유형을 좁히거나
//타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할수 없다.
//unknown 타입을 사용하면 rentime error를 줄일 수 있을것같다.
// 사용전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.
