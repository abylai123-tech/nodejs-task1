const { EventEmitter } = require('events');
const myEmitter = new EventEmitter();

const users = [
    { name: 'Eva', like: 0 },
    { name: 'David', like: 0 },
    { name: 'Sophia', like: 0 },
];

myEmitter.on('publish', name => {
    users.push({ name, like: 0 });
    console.log(`Новый пользователь добавлен: ${name}`);
});

myEmitter.on('AddLike', index => {
    if (users[index]) {
        users[index].like++;
        console.log(users);
    } else {
        console.log(`Пользователь с индексом ${index} не существует.`);
    }
});

myEmitter.emit('publish', 'Oliver');
myEmitter.emit('AddLike', 0);
myEmitter.emit('AddLike', 0);
myEmitter.emit('AddLike', 0);
myEmitter.emit('AddLike', 0);