return {
  title: '세 수의 합',
  problems: [
    { injectBody: "sum3 1 2 3",
      output: "=> 6",
      timeLimit: 1 },
    { injectBody: "sum3 3 2 6",
      output: "=> 11",
      timeLimit: 1 },
    { injectBody: "sum3 (-2) 5 2",
      output: "=> 5",
      timeLimit: 1 },
    { injectBody: 'sum3 (2 * 5) (4 / 2) (1 % 3)',
      output: '=> 13',
      timeLimit: 1 },
  ]
};