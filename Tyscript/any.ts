function returnAny(message: any): any{
    console.log(message);
    
}

//무엇이든 들어올 수 있는 상태
const any1 = returnAny("return은 아무거나");

//어떤것이든 할수있다는 뜻을 포함하는게 any이며
//정확한 가이드를 위해서는 any를 지양해야 함 
//any1.toString();
//const any1: any



//any
//- 어떤 타입이어도 상관없는 타입입니다.
//- 이걸최대한 쓰지 않는게 핵심입니다.
//- 왜냐면 컴파일 타임에 타입체크가 정상적으로 이뤄지지 않기 때문입니다.
//- 그래서 컴파일 옵션중에는 any를 써야하는데 쓰지않으면 오류를 뱉도록 하는 옵션도 있습니다.
    //nolmplicitAny


//any는 계속해서 개체를 통해 전파됨.
//결국, 모든 편의는 타입 안정성을 잃는 대가로 온다는것을 기억하십시오.
//타입안정성은 typeScript를 사용하는 주요동기 중 하나이며 필요하지 않은 경우에는 
//any를 사용하지 않도록 해야합니다.

let looselyTyped: any = {};
//const d = looselyTyped.a.b.c.d;
//  ^ = let d: any

//api의 동적인 데이터가 들어오는 경우 any가 들어올수 있겠지만
//런타임에 규정을 시켜서 규정된 결과로 타이핑이 되게해야함.



function leakingAny ( obj:any ){
    const a1: number = obj.num; // number이라는 type가 들어오는 순간 누수가 막힌다.
    const b1 = a1 + 1;
    return b1;
}

const c1 = leakingAny({ num: 0 });
//c1.indexOf("0"); // ==> 누수에러





