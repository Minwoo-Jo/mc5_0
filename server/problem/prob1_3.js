return {
  title: '홀짝2',
  n: 10,
  generate: (i, n) => {
    let p = {};
    let a = 5 + Math.floor(Math.random() * 995);
    if(n % 2 == 0) {
      p.injectBody = 'isOdd ' + a;
      p.output = '=> ' + (a % 2 == 1? '"true"' : '"false"');
    } else {
      p.injectBody = 'isEven ' + a;
      p.output = '=> ' + (a % 2 == 0? '"true"' : '"false"');
    }
    
    p.timeLimit = 1;
    return p;
  }
};