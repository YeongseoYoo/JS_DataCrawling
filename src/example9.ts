interface IUser {
    name: string;
    greeting(): string;
  }

interface IStudent extends IUser {
    sno: number; //학번
  }
interface IProfessor extends IUser {
    salary?: number;
    evaluate: (student: IStudent) => number;
  }
const student1: IStudent = {
    name: "YS",
    greeting: function () {
      return `Hello ${this.name}`;
    },
    sno: 20202020,
  };
  const professor1: IProfessor = {
    name: "김정호",
    greeting: function () {
      return `Hi ${this.name}`;
    },
    salary: 10000,
    evaluate: (student) => 100,
  };
  
  function UserAction(user: IProfessor | IStudent) {
    if ("sno" in user) {
      console.log(user.sno); //IStudent
    } else {
      console.log(user.evaluate); //IProfessor
    }
  }
  
  const sample10: (IStudent & IProfessor) | string = "hi";