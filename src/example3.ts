function greet(name: string, greeting?:string) : string{
    //앞에 거 null이거나 undefined가 아니면 앞에 값으로 쓰기
    return `${greeting || 'Hello'}.${name}`
    //eturn `${greeting;}
}
//great
console.log(greet('성수'));
console.log(greet("유영서"));
console.log(greet('유영서', '반가워'));
