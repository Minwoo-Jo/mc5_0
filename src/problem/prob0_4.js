return {
  title: '홀짝1',
  n: 10,
  generate: (i, n) => {
    let p = {};
    let a = 5 + Math.floor(Math.random() * 995);
    p.injectBody = 'parity ' + a;
    p.output = '=> ' + (a % 2 == 0? 'even' : 'odd');
    p.timeLimit = 1;
    return p;
  }
};