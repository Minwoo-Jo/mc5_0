return {
  title: '세 수 중 최대',
  n: 10,
  generate: (i, n) => {
    let p = {};
    let a = 5 + Math.floor(Math.random() * 995);
    let b = 5 + Math.floor(Math.random() * 995);
    let c = 5 + Math.floor(Math.random() * 995);
    p.injectBody = 'max3 ' + a + ' ' + b + ' ' + c;
    p.output = '=> ' + Math.max(a, b, c);
    p.timeLimit = 1;
    return p;
  }
};