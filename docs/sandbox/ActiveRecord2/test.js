const { user } = require('pg/lib/defaults');
const User = require('./User');

async function findAll(){
    const result = await User.findAll();
    console.log(result);
}

//findAll();

async function findById(id){
    const result = await User.findById(id);
    console.log(result);
}

//findById(10);

async function findByEmail(email){
    const result = await User.findByEmail(email);
    console.log(result);
}

//findByEmail("ch.uck@oclock.io");


async function insert(){
    const user = new User({
        firstname: "Anne",
        lastname: "Ogastric",
        email: "Anne.Ogastric@gmail.com",
        password: "1234"});

    await user.insert();
}

// insert();


async function update(id){
    const user = await User.findById(id)
    user.firstname = "new firstname";;
    user.password = "new Password";
    user.update();
}

// update(1);
