const Tag = require('./Tag');

async function main(){

    const result = await Tag.getAll();
    console.log(result);
}

main();
