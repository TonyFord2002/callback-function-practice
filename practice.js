const colors = ['red', 'green', 'blue'];

console.log('BEFORE the forEach...');

colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});

console.log('AFTER the forEach...');




let todos = ['Buy milk', 'Mow lawn'];

// Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false});

// Wrap the implicit returned object in parens
let todoObjects = todos.map(todo => ({todo: todo, done: false}));
console.log(todos)