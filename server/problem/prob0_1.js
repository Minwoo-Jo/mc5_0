return {
  title: '항등함수',
  problems: [
    { injectBody: "id 0",
      output: "=> 0",
      timeLimit: 1 },
    { injectBody: "id 2",
      output: "=> 2",
      timeLimit: 1 },
    { injectBody: "id 10",
      output: "=> 10",
      timeLimit: 1 },
    { injectBody: 'id "Hello"',
      output: '=> "Hello"',
      timeLimit: 1 },
    { injectBody: 'if (id true) "True" "False"',
      output: '=> "True"',
      timeLimit: 1 },
  ]
};