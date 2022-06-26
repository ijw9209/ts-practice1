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


function sum(x: number, y: number): number {
    return x + y;
    //null반환시 에러
}

sum(1, 2);

//숫자 배열 총합
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

//void 설정시
function returnNotihing(): void {
    console.log('I am just saying hello world');
}

//interface 사용
// interface Shape {
//     getArea(): number; //Shape interface 에는 getArea 라는 함수가 꼭있어야하며 해당 함수의 반환값은 숫자
// }

// class Circle implements Shape {
//     //`implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시

//     radius: number; // 멤버 변수 radius 값을 설정

//     constructor(radius: number) {
//         this.radius = radius;
//     }

//     //너비를 가져오는 함수 구현
//     getArea() {
//         return this.radius * this.radius * Math.PI;

//     }
// }

// class Rectangle implements Shape {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// shapes.forEach(shape => {
//     console.log(shape.getArea());
// })


///////////////////////////////////
// public private 설정

//interface 사용
interface Shape {
    getArea(): number; //Shape interface 에는 getArea 라는 함수가 꼭있어야하며 해당 함수의 반환값은 숫자
}

class Circle implements Shape {
    //`implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시


    constructor(public radius: number) {
        this.radius = radius;
    }

    //너비를 가져오는 함수 구현
    getArea() {
        return this.radius * this.radius * Math.PI;

    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
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


const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})

////////////////////////////

//#3
// interface Person {
//     name: string;
//     age?: number; //물음표는 설정을해도되고 안해도 되는 값
// }

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }

// const person: Person = {
//     name: '김사람',
//     age: 20
// }

// const expert: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react'];
// };

////////////////////////////
//#4
// 유사한 형태는 상속받아 사용가능
// interface Person {
//     name: string;
//     age?: number; //물음표는 설정을해도되고 안해도 되는 값
// }

// interface Developer extends Person {
//     skills: string[];
// }

// const person: Person = {
//     name: '김사람',
//     age: 20
// }

// const expert: Developer = {
//     name: '김개발',
//     skills: ['javascript', 'react']
// };

// const people: Person[] = [person, expert];


////////////////////////////////////
//#5 type alias 특정 별칭

type Person = {
    name: string;
    age?: number; //물음표는 설정을해도되고 안해도 되는 값
}

// & 는 Intersection 으로 두개 이사으이 타입들을 합쳐줌
type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: '김사람'
}

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

type People = Person[]; // Person을 이제 People 라는 타입으로 사용가능
const pelple: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

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

function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    };
}

const merged = merge({ foo: 1 }, { bar: 1 });

//또다른 예시
function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(10);

//Generics #3 
//interface에서 Generics 사용
// interface Items<T> {
//     list : T[];
// }

// const items: Items<string> ={
//     list: ['a','b','c']
// };

//type 에서 genetrics 사용
type Items<T> = {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
};

////////////////////////
//Generics #4
//class 에서 generics사용
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
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
