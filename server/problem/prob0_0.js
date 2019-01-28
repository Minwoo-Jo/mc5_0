return {
  title: 'Hello, Lambda!',
  n: 1,
  generate: (i, n) => {
    let p = {};
    p.output = 'Hello, Lambda!\n=> "Hello, Lambda!"';
    p.timeLimit = 1;
    return p;
  }
};