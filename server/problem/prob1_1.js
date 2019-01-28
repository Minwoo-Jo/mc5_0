return {
  title: '피보나치1',
  n: 10,
  generate: (i, n) => {
    let p = {};
    let a = 0 + Math.floor(Math.random() * 20);
    let mul = (a, b) => {
      return [a[0] * b[0] + a[1] * b[1],
              a[0] * b[1] + a[1] * b[2],
              a[1] * b[1] + a[2] * b[2]];
    }
    let fibo = (n) => {
      if(n == 0) return [1, 0, 1];
      let t = fibo(Math.floor(n / 2));
      let z = mul(t, t);
      if(n % 2 == 1) z = mul(z, [1, 1, 0]);
      return z;
    }
    p.injectBody = 'fibo ' + a;
    p.output = '=> ' + fibo(a)[1];
    p.timeLimit = 1;
    return p;
  }
};