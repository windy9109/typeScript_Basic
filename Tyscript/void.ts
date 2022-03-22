//void

function returnVoid(message: string){
    console.log(message);

    return undefined;
}
//추론
//function returnVoid(message: string): void

//에러1
//const r1 = returnVoid("리턴이 없다");


//에러2
//const r2 :undefined = returnVoid("리턴이 없다");


returnVoid("리턴이 없다");
//function returnVoid(message: string): undefined