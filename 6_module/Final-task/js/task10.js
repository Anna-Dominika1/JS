import users from './users.js';




const getSortedUniqueSkills = users => {
    const resultes = users.reduce((acc, value) => [...acc, ...value.skills], [])
    .reduce((acc, value) => (acc = acc.includes(value) ? acc : [...acc, value]), [])
    .sort();
    return resultes
  };
  
  console.log(getSortedUniqueSkills(users));