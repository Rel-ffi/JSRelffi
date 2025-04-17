let users = [
    {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', status: true},
    {kills: ['html', 'js'], id: 2, name: 'petya', status: false},
    {kills: ['html', 'js'], id: 3, name: 'anna', status: true},
    {kills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', status: false}
];
console.log(users);

console.log(users[0].age);
console.log(users[0]['age']);

console.log(users[0].skills[2]);
