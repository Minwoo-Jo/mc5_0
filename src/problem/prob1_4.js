return {
  title: '피보나치2',
  n: 10,
  generate: (i, n) => {
    let p = {};
    let a = 0 + Math.floor(Math.random() * 1000000000);
    let mul = (a, b) => {
      return [a[0] * b[0] + a[1] * b[1],
              a[0] * b[1] + a[1] * b[2],
              a[1] * b[1] + a[2] * b[2]];
    }
    let fibo = (n) => {
      if(n == 0) return [1, 0, 1];
      let t = fibo(n / 2);
      let z = mul(t, t);
      if(n % 2 == 1) z = mul(t, [1, 1, 0]);
      return z;
    }
    p.injectBody = 'fac ' + a;
    p.output = '=> ' + fibo(a)[1];
    p.timeLimit = 1;
    return p;
  }
};