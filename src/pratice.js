"use strict";
// // const message: string = "hello world";
// // console.log(message);
// let count = 0; //숫자
// count += 1;
// // count = '갑자기 분위기 문자열'; //에러
// const message: string = 'hello world'; //문자열
// const done: boolean = true; // 불리언 값
// const numbers: number[] = [1, 2, 3]; // 수자 배열
// const messages: string[] = ['hello', 'world']; //문자열 배열
// // message.push(1); //숫자는 안됨
// let mightBeUndefined: string | undefined = undefined; //string 일수도 undefined 일수도..
// let nullableNumber: number | null = null; //number 일수도 null 일수도
// let color: 'red' | 'orange' | 'yellow' = 'red'; //red,orange,yellow 중 하나
// color = 'yellow';
// // color = 'green'; //에러발생
function sum(x, y) {
    return x + y;
    //null반환시 에러
}
sum(1, 2);
//숫자 배열 총합
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
//void 설정시
function returnNotihing() {
    console.log('I am just saying hello world');
}
class Circle {
    //`implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    //너비를 가져오는 함수 구현
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
//private 외부에서 조회불가
// console.log(rectangle.width);
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person = {
    name: '김사람'
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const pelple = [person, expert];
const color = 'red';
const colors = ['red', 'orange'];
//////////////////////////////////
//Generics
//이러면 타입 유추가 깨짐, merge 안에 무엇인지 알 수 없음
// function merge(a: any, b: any): any {
//     return {
//         ...a,
//         ...b
//     }
// }
// const merged = merge({ foo: 1 }, { bar: 1 });
//Generics #2
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
//또다른 예시
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
const items = {
    list: ['a', 'b', 'c']
};
////////////////////////
//Generics #4
//class 에서 generics사용
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
