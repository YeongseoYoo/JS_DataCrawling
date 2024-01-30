let number: number = 5;
let text: string = "Hello World";

let number2 = 5;
let text2 = "Hello World";

let bool1: boolean = true;

//둘다 가능!
let arr1: String[] = ["a", "b", "c"];
let arr2: Array<String> = ["a", "b", "c"];

let sample: [number, Function] = [0, ()=>{

}]
//any는 진짜 모를 때 씀.
let anyValue: any = 1;
function func1(value: any){
    console.log(value);
}
//이벤트 객체 같은 것을 받아서 return하지 않는 경우에 이렇게 작성함!
function func2(num1: number):void{
    console.log(num1);
}
let nullValue: null = null;
let UndefinedValue: undefined = undefined;