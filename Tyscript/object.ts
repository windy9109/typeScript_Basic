//create by object literal
const person1 = {name: 'Mark', age:39};

//person1 is not "object" type.
//person1의 리터럴 타입(아래)
//person1 is "{name: string, age: number}" type.

//create by Object.create
const person2 = Object.create({name:'Mark', age: 39});
//const person2 = Object.create(39);  => 안됌. 이걸 막아주기위해 object type이 존재함



//Object
// - a type that represents the non-proimitive type
// - "primitive type이 아닌 것"을 나타내고 싶을 때 사용하는 타입


//non-primitive type
//not number, String, boolean, bigint, symbol, null, or undefined
//number, String, boolean, bigint, symbol, null, or undefined 아닌경우를 할당할때는 object를 사용함


let obj2: object = {}; // ==> 보통은 이런식으로 사용하지 않음
obj2 = {name: 'Mark'}; // ==> 가능
obj2 = [{name: 'Mark'}]; // ==> 가능
// obj2 = 39; // error
// obj2 = 'Mark'; // error
// obj2 = true; // error
// obj2 = 100n; // error
// obj2 = Symbol();// error
// obj2 = null; // error
// obj2 = undefined; // error



//primitive type은 받지않겠다는 제약사항 걸기
declare function create(o: object | null): void;

create({prop: 0});
create(null);
// create(42); // error
// create("string"); // error
// create(false); // error
// create(undefined); // error

// //Object.create
// Object.create(0); // error