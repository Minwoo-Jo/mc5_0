return {
  title: 'Hello, Lambda!',
  n: 1,
  generate: (i, n) => {
    let p = {};
    let input = 5 + Math.floor(Math.random() * 995);
    p.output = 'Hello, Lambda!\n=> Hello, Lambda!';
    p.timeLimit = 1;
    return p;
  }
};