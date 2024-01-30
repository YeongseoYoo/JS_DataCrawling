type User2 = {
    readonly id:number,
    name : string,
    age?:number
}
let user3: User2 = {
    id: 1, 
    name: "YS",
    age: 30
}
//타입은 이렇게 작성, 인터페이스는 상속. 