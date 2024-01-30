function identity<T>(arg: T): T {
    return arg;
  }
  
  identity(10);
  
  function useState<T>(arg: T): [T, (arg: T) => void] {
    return [arg, (arg2) => {}];
  }
  
  const [count, setCount] = useState<number>(0);
  
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }
  
  let myIdentity: GenericIdentityFn<number> = identity;
  