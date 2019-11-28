const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const timeFrontend = tasks.map((task) => {
    if(task.category === 'Frontend') {
        return task.timeSpent
    }
}).filter((elem) => elem !== undefined
).reduce((accum, elem) => accum + elem);

const timeBug = tasks.map((task) => {
    if(task.type === 'bug'){
        return task.timeSpent
    }
}).filter((elem) => elem !== undefined
).reduce((accum, elem) => accum + elem);

const findUI = tasks.filter((task) => {
    return task.title.includes('UI')
}).length;

    //4 задание
    const frontend = tasks.filter((task) => {
        return task.category === 'Frontend'
    }).length;
    const backend = tasks.filter((task) => {
        return task.category === 'Backend'
    }).length;
    const all = {Frontend:frontend, Backend:backend};
    //конец 4 задание

const hours4 = tasks.filter((task) =>{
    return task.timeSpent > 4
}).map((elem) => {
    delete elem.id;
    delete elem.timeSpent;
    delete elem.type;
    return elem
});

console.log('Time spend for all frontend:', timeFrontend);
console.log('Time spend for bugs:', timeBug);
console.log('Amount tasks UI:', findUI);
console.log('Tasks by category:', all);
console.log('Tasks longer than 4 hours:', hours4);