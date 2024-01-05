const data = [
    {id: 1,name: 'Alice', skills: ['JavaScript', 'HTML']},
    {id: 2, name: 'Marcelo', skills: [ 'JavaScript', 'CSS']},
    {id:3, name: 'Jay', skills: ['HTML','CSS']},
];

const result = data.reduce((acc,person) => {
    person.skills.forEach(skill=> {
        acc[skill] = acc[skill] ? acc[skill] + 1:1;
    });
    return acc;
} , {});

console.log(result);