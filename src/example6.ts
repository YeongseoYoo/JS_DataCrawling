interface Greet {
    (name: string, greeting?: string) : string; //function에 대한 return value

}
const greet3: Greet = (name, greeting) => {
    return `${greeting || "Hello"} ${name}`;
}
console.log(greet3("YS"));


