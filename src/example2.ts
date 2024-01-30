function add(a: number, b: number) {
    return a + b;
  }
  
  const add2 = function (a: number, b: number) {
    return a + b;
  };
  
  const add3: (a: number, b: number) => number = (a, b) => {
    return a + b;
  };