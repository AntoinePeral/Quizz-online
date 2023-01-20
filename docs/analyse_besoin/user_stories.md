# User stories

Rappels :

- Les user stories font de parfait scénario de test pour évaluer le bon fonctionnement de notre application

On écrit nos user stories en respectant une syntaxe bien précise :

    - EN TANT QUE ... JE VEUX ... DANS LE BUT DE ...
    - AS A ... I WANT ... SO THAT ...


# Clarifications 

Q : Est-ce qu'il y a uniquement des élèves qui peuvent participer aux quiz ?
    A : Non, n'importe qui peut créer un compte et accéder aux quiz

Q : Quels sont les rôles prévus sur le site oQuiz ?
    A : Il existera uniquement 2 rôles, membres et visiteurs. Les membres peuvent directement créer des quiz

Q : Les quiz apparaissent-ils sur la page d'accueil
    A : Oui, mais il faut être connecté pour pouvoir y répondre

Q : Doit-on utiliser PHPmyadmin ?
    A : Non pas besoin, vous pouvez utiliser ce que vous voulez comme techno

Q : Faut-il une page profil pour un membre ?
    A : Non pas dans un premier temps. En revanche ajouter une indication à l'écran pour préciser si l'utiliseur est bien connecté ou doit se connecter.


# Use cases

| En tant que...| j'ai besoin de... | afin de... | commentaire | # sprint |
|---|---|---|---|---|
visiteur | une page d'accueil | prévisualiser le contenu du site | - | 1 |
visiteur | visualiser les titres de quiz sur la page d’accueil | choisir le quiz que je souhaite effectuer et y accéder | - | 1 |
visiteur | visualiser les description et les auteurs des quiz sur la page d’accueil |  | - | 1 |
visiteur | pouvoir accéder aux questions d’un quiz | Attention, dans un second temps cette fonctionnalité sera réservé aux membres connecté | 1 |
visiteur | pouvoir visualiser la difficulté de chaque question |  | - | 1 |
visiteur | visualiser les sujets de chaque quiz sur la page du quiz |  | - | 1 |
visiteur | pouvoir visualiser tous les sujets | pouvoir accéder aux quiz d’un sujet | - | 1 |
visiteur | pouvoir visualiser tous les quiz pour un sujet donné |  | - | 1 |
visiteur | accéder à un formulaire d’inscription | pouvoir m’inscrire | - | 2 |
visiteur | accéder à un formulaire de connexion | pouvoir me connecter | - | 2 |
visiteur | pouvoir m’inscrire | devenir membre | - | 2 |
visiteur | pouvoir me connecter à mon compte | pouvoir répondre à un quiz | - | 2 |
membre | pouvoir me déconnecter |  | - | 2 |
membre | pouvoir répondre aux questions d’un quiz | vérifier mes connaissances | - | 3 |
membre | pouvoir visualiser mon score |  | - | 3 |
membre | pouvoir visualiser les bonnes et mauvaises réponses que j’ai donné | savoir quelles erreurs j’ai effectuées | - | 3 |

# Liste des fonctionnalités

=> Page d'accueil avec:
    - les quizz
    - leurs auteurs
    - leurs descriptions

=> Page "Quiz" qui affiche un quiz et :
    - ses questions
    - ses sujets
    - la difficulté pour chaque question
    - les réponses possibles
    - un bouton pour soumettre le quiz

=> Page "Liste des sujets" (pour choisir un sujet)

=> Page "Liste des quiz par sujet" avec les quiz de chaque sujet

=> Page "S'inscrire" avec un formulaire de création de compte

=> Page "Se connecter" avec un formulaire de connexion

=> Bouton "Se déconnecter" (dans le header) 

=> Vérification du rôle "Membre" pour répondre aux quiz

=> Page "Quizz terminé" avec :
    - score
    - les bonnes et mauvaises réponses