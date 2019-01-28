return {
  title: '팩토리얼',
  n: 10,
  generate: (i, n) => {
    let p = {};
    let a = 5 + Math.floor(Math.random() * 995);
    let v = 1;
    for(var i = 1; i <= n; i++) v *= i;
    p.injectBody = 'fac ' + a;
    p.output = '=> ' + v;
    p.timeLimit = 1;
    return p;
  }
};