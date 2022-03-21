"use strict";
//튜플 type
let x;
//튜플일경우 순서, 타입, 길이도 맞아야함.
x = ["hello", 39];
//에러
//x = [10, "Mark"];
//길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '3'에 요소가 없습니다.
//2번째 이후에는 값을 넣을 수 없도록 undefind됨.
// x[3] = "world"; ==> 에러
//length에러
//x[2];
const person = ["Mark", 39];
//추론기능 향상
//에러
//const [first, second, third] = person;
//정상
const [first, second] = person;
//const first: string
//const second: number
//const third: undefined
