"use strict";
console.log(Symbol('foo') == Symbol('foo'));
//결과 : false
const sym = Symbol();
const obj = {
    [sym]: "value",
};
//접근불가
//obj["sym"]
//접근가능
obj[sym];
