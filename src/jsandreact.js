const jsandreact = [
  {
    text: 'What is the correct command to create a new React project?',
    options: [
      { id: 0, text: 'npm create-react-app', isCorrect: false },
      { id: 1, text: 'npx create-react-app myReactApp', isCorrect: true },
      { id: 2, text: 'npx create-react-app', isCorrect: false },
      { id: 3, text: 'npm create-react-app myReactApp', isCorrect: false },
    ],
  },
  {
    text: 'Which keyword creates a constant in JavaScript?',
    options: [
      { id: 0, text: 'const', isCorrect: true },
      { id: 1, text: 'var', isCorrect: false },
      { id: 2, text: 'constant', isCorrect: false },
      { id: 3, text: 'let', isCorrect: false },
    ],
  },
  {
    text: "A copy of the 'real' DOM that is kept in memory is called what?",
    options: [
      { id: 0, text: 'Shadow DOM', isCorrect: false },
      { id: 1, text: 'DOM', isCorrect: false },
      { id: 2, text: 'Virtual DOM', isCorrect: true },
      { id: 3, text: 'React DOM', isCorrect: false },
    ],
  },
  {
    text: 'Which operator can be used to conditionally render a React component?',
    options: [
      { id: 0, text: '??', isCorrect: false },
      { id: 1, text: '&&', isCorrect: true },
      { id: 2, text: '||', isCorrect: false },
      { id: 3, text: '::', isCorrect: false },
    ],
  },
  {
    text: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
    options: [
      { id: 0, text: 'key', isCorrect: true },
      { id: 1, text: 'id', isCorrect: false },
      { id: 2, text: 'data', isCorrect: false },
      { id: 3, text: 'index', isCorrect: false },
    ],
  },
  {
    text: "How do you write 'Hello World' in an alert box?",
    options: [
      { id: 0, text: "msgBox('Hello World');", isCorrect: false },
      { id: 1, text: "alertBox('Hello World');", isCorrect: false },
      { id: 2, text: "msg('Hello World'); ", isCorrect: false },
      { id: 3, text: "alert('Hello World'); ", isCorrect: true },
    ],
  },
  {
    text: 'How do you create a function in JavaScript?',
    options: [
      { id: 0, text: 'function:myFunction()', isCorrect: false },
      { id: 1, text: 'function myFunction() ', isCorrect: true },
      { id: 2, text: 'function = myFunction() ', isCorrect: false },
    ],
  },
  {
    text: 'How to write an IF statement in JavaScript?',
    options: [
      { id: 0, text: 'if i = 5 then', isCorrect: false },
      { id: 1, text: 'if i = 5', isCorrect: false },
      { id: 2, text: 'if i == 5 then', isCorrect: false },
      { id: 3, text: 'if (i == 5)', isCorrect: true },
    ],
  },
  {
    text: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: [
      { id: 0, text: 'if (i != 5)', isCorrect: true },
      { id: 1, text: 'if i =! 5 then', isCorrect: false },
      { id: 2, text: 'if i <> 5', isCorrect: false },
      { id: 3, text: 'if (i <> 5)', isCorrect: false },
    ],
  },
  {
    text: 'How does a FOR loop start?',
    options: [
      { id: 0, text: 'for (i <= 5; i++)', isCorrect: false },
      { id: 1, text: 'for i = 1 to 5', isCorrect: false },
      { id: 2, text: 'for (i = 0; i <= 5; i++)', isCorrect: true },
      { id: 3, text: 'for (i = 0; i <= 5)', isCorrect: false },
    ],
  },
];

export default jsandreact;
