const Level = require("./models/V2/Level");
const Tag = require ("./models/V2/Tag");
const Quiz = require ("./models/V2/Quiz");
const User = require ("./models/V2/User");
const Question = require ("./models/V2/Question");
const Answer = require ("./models/V2/Answer");



// ==================================
// =========== findAll() ============
// ==================================

// async function findAllTest(){
//     const levels = await Level.findAll();
//     // console.log(level);

//     //Pareil pour findAll() : ON reçoit un objet avec plain d'autres infos sur nos levels. On en a pas besoin, donc on peut filtrer avec un .get() avec une boucle
//     // const levelList = []
//     // const map1 = levels.map(x => levelList.push(x));
//     for (const level of levels){
//       console.log(level.get());
//     }
// }

async function findAllTest () {
  const questions = await Question.findAll();
  for (const question of questions){
    console.log(question.get());
  }
}

// findAllTest();

// ==================================
// =========== findByPk() ===========
// ==================================
// Cherche par clé primaire (génralement l'id)

// async function findByPkTest(id){
//     const level = await Level.findByPk(id);
//     //console.log(level); //Nous renvoie tout ce que l'ORM connait sur notre objet
//     //On peut utiliser la méthode .get() sur notre instance pour
//     //formater automatiquement en ne gardant que les champs qui 
//     //nous intéressent
//     console.log(level.get())
// }

async function findByPkTest(id) {
  const tagById = await User.findByPk(id)
  console.log(tagById.get());
}

// findByPkTest(1);


// ==================================
// =========== findOne() ============
// ==================================

// async function findOneTest(name){
//   const level = await Level.findOne({
//       where: { //La fameuse clause WHERE
//           name: name
//       }
//   })
//   console.log(level.get());
// }

async function findOneTest(name) {
  const findByName = await Tag.findOne({where:{name: name}})
  console.log(findByName.get());
}

// findOneTest("Minouche");

// ==================================
// =========== create() =============
// ==================================

// async function createTest(name){
//   const cauchemardesqueLevel = await Level.create({
//       name: name
//   })
//   console.log(cauchemardesqueLevel)
// }

async function createTest(name) {
  const newLevel = await Level.create({
    name : name
  })

}


createTest("Mega-Difficile");
// findAllTest();

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

async function destroyTest(id){
  await Answer.destroy({
    where:{
      id: id
    }
  })
}

// destroyTest(4);

// ==================================
// =========== update() ============
// ==================================

// async function updateTest(newValue, recordToChange){
//   await User.update(
//       {firstname: newValue},
//       {where: {description: recordToChange}})
// }

async function updateTest(newValue, OldValue){
  await User.update(
    {firstname: newValue}, 
    {where:{ firstname: OldValue}})
  console.log(',,');
}

// updateTest("Lexa", "Mi");

// Rien a voir avec le CRUD, ici on fait de la magie
// ==================================
// =========== sync() ===============
// ==================================

async function syncLevelTest(){
  await Level.sync()
}

// syncLevelTest();