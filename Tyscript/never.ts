//never

//never타입은 모든타입의 서브타입이며, 모든 타입에 할당할수 있습니다.
//하지만, never에는 그 어떤것도 할당할 수 없습니다.
//any조차도 never에게 할당할수 없습니다.
//잘못된 타입을 넣는 실수를 막고자 할때 사용하기도 합니다.

declare const a1: string | number;
//let a1: string = 'hello';
if( typeof a1 !== 'string' ){
     a1;
     //let b1: never =
    //a1이 string가 아니라면 let a1: never
    //a1이 string가 아니라면 const a1: number
}

type Indexable<T> = T extends string ? T & { [ index: string ]: any }: never;
//T가 string 이면  [ index: string ]: any 이고 아니라면 naver이다.
type ObjectIndexable = Indexable<{}>;

//naver에 넣으려 하므로 에러
//const b5: Indexable<{}> ='';

function error(message: string): never{
    //아무것도 리턴되지 않는다.
    throw new Error(message);
    //throw를 하게되면 내려오지 않으므로 리턴하지 않게됨.
}

function fail(){
    return error("failed");
    //위의 error()함수를 리턴함
    //never로 추론
}

function infiniteLoop(): never {
    //리턴타입 never
    while(true){

    }
}
