const Level = require("./models/V2/Level");


// ==================================
// =========== findAll() ============
// ==================================

async function findAllTest(){
    const levels = await Level.findAll();
    //console.log(levels);

    //Pareil pour findAll() : On reçoit un objet avec pleins d'autres infos
    //sur nos levels. On en pas besoin, donc on peut filtrer avec .get()
    for(const level of levels){
        console.log(level.get())
    }


}

//findAllTest();

// ==================================
// =========== findByPk() ===========
// ==================================

async function findByPkTest(id){
    const level = await Level.findByPk(id);
    //console.log(level); //Nous renvoie tout ce que l'ORM connait sur notre objet
    //On peut utiliser la méthode .get() sur notre instance pour
    //formater automatiquement en ne gardant que les champs qui 
    //nous intéressent
    console.log(level.get())
}

//findByPkTest(1);

// ==================================
// =========== findOne() ============
// ==================================

async function findOneTest(name){
    const level = await Level.findOne({
        where: { //La fameuse clause WHERE
            name: name
        }
    })
    console.log(level.get())
}

//findOneTest("Facile");



// ==================================
// =========== create() =============
// ==================================

async function createTest(name){
    const cauchemardesqueLevel = await Level.create({
        name: name
    })
    console.log(cauchemardesqueLevel)
}

//createTest("Cauchemardesque");

// ==================================
// =========== destroy() ============
// ==================================

async function destroyTest(name){
    await Level.destroy({
        where: {
            name: name
        }
    })
}

//destroyTest("Cauchemardesque")


// ==================================
// =========== update() =============
// ==================================

async function updateTest(newValue, recordToChange){
    await Level.update(
        {name: newValue},
        {where: {name:recordToChange}})
}

//updateTest("Ultra", "Difficile");




// Rien a voir avec le CRUD, ici on fait de la magie
// ==================================
// =========== sync() ===============
// ==================================

async function syncLevelTest(){
    await Level.sync()
}

//syncLevelTest();