//JavaScript

//f1이라는 함수의 body에서는 a를 사용할 것입니다.
//a가 할 수있는 일은 a의 타입이 결정합니다.

function f1(a){
    return a;
}

//////////////////함수 사용법에 대한 오해를 야기하는 자바스크립트
//(f2실행결과가 Nan을 의도한 것이 아니라면)
// 이 함수의 작성자는 매개변수 a가 number타입이라는 가정으로 함수를 작성했습니다.

function f2(a2){
    return a2*38;
}

//사용자는 사용법을 숙지하지않은채, 문자열을 사용하여 함수를 실행했습니다.

console.log(f2(10)); //380
console.log('Mark'); //NaN





////////////타입스크립트의 추론에 의지하는 경우
//타입스크립트 코드지만,
//a의 타입을 명시적으로 지정하지 않은 경우이기 때문에 a는 any로 추론됩니다.
//함수의 리턴타입은 number로 추론됩니다. (Nan도 number의 하나입니다.)

function f3(a3){
    return a3*38;
}

//사용자는 a가 any이기 때문에, 사용법에 맞게 문자열을 사용하여 함수를 실행했습니다.
console.log(f3(10));
console.log(f3('Mark'+5)); //NaN




/////////////   nolmplicitAny옵션을 켜면   ///////////////////
//타입을 명시적으로 지정하지 않은경우,
//타입스크립트가 추론중'any'라고 판단하게되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.




////////////////////noImplicitAny에 의한 방어 
//error TS7006: Parameter 'a' implicitly has an 'any' type.

function f4(a4){
    return a4*38;
}

//사용자의 코드를 실행할수 없습니다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 합니다.

console.log(f4(10));
console.log(f4('Mark')+5);





//매개변수의 타입은 명시적으로 지정했습니다.
//명시적으로 지정하지 않은 함수의 리턴타입은 number 로 추론됩니다.

function f5( a: number){
    if(a>0){
        return a*38;
    }
}


//사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했습니다.
//해당함수의 리턴타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있습니다.
//하지만 실제 undefined + 5가 실행되어 NaN이 출력됩니다.

console.log(f5(5)); //190;
//에러
console.log(f5(-5)+5); //NaN 








////////////////////strictNullChecks옵션을 켜면


//모든 타입에 자동으로 포함되어있는 'null'과 'undefined'를 제거해줍니다.


//매개변수의 타입은 명시적으로 지정했습니다.
//명시적으로 지정하지 않은 함수의 리턴타입은 number | undefined 로 추론됩니다.

function f6( a: number){
    if(a>0){
        return a*38;
    }
}


//사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했습니다.
//해당함수의 리턴타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있습니다.
//하지만 실제 undefined + 5가 실행되어 NaN이 출력됩니다.

console.log(f6(5)); //190;
//에러
console.log(f6(-5)+5); //error TS2532: Object is possibly 'undefined'.



//명시적으로 리턴타입을 지정해야할까?

//매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정했습니다.
//실제 함수 구현부의 리턴타입과 명시적으로 지정한 타입이 일치 하지않아 컴파일 에러가 발생합니다.
//에러
function f7(a: number): number{
    if( a > 0 ){
        return a*38;
    }
}



/////////////////////////////noImplicitReturns 옵션을 켜면
//함수내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.

//if가 아닌경우 return을 직접하지않고 코드가 종료된다.
function f8(a: number): number{
    if( a > 0 ){
        return a*38;
    }
}



/////////////////////////////매개변수에 object가 들어오는경우
//JavaScript 



function f9(a10){
    return `이름은 ${a.name}이고, 연령대는 ${
        Math.floor(a.age /10)*10
    }대 입니다.`;
}

console.log(f9({name: 'Mark', age: 38})); //이름은 Mark이고, 연령대는 30대 입니다.
console.log(f9('Mark'); //이름은 undefined이고, 연령대는 NaN대 입니다.





//Object literal type

function f10(a10: {name: string; age: number}): string{
    return `이름은 ${a.name}이고, 연령대는 ${
        Math.floor(a.age /10)*10
    }대 입니다.`;
}

console.log(f9({name: 'Mark', age: 38})); //이름은 Mark이고, 연령대는 30대 입니다.
console.log(f9('Mark')); //이름은 undefined이고, 연령대는 NaN대 입니다.





///////////////////////나만의 타입을 만드는 방법

interface PersonInterface {
    name: string;
    age: number;
}

type PersonTypeAlias = {
    name: string;
    age: number;
}

function f11(a: PersonInterface): string{
    return `이름은 ${a.name}이고, 연령대는 ${
        Math.floor(a.age /10)*10
    }대 입니다.`;
}

console.log(f9({name: 'Mark', age: 38})); //이름은 Mark이고, 연령대는 30대 입니다.
console.log(f9('Mark')); //에러



