//On retrouve cette notion de classe/instance dans l'utilisation de la dépendance "pg" !

const client = new Client(/*{host: "", password: "", ...}*/)  //On créé une nouvelle instance Client


class Client { //La classe Client ressemble à quelque chose comme ça 
    host;
    password;
    |
    |

    constructor(host, password, ...){

    }

    connect(){
        ...
    }
}

client.connect() //On utilise la méthode .connect qui est contenue dans la classe Client