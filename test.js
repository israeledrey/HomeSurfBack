import boards from './Data/boards.json'

const bord = boards.find({}, {_id:1}).skip(32);
console.log(bord);
