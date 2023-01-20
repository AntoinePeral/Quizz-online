# MCD : Modèle Conceptuel de Données

Objectif : avoir une vue globale des entités de notre application, ainsi que des liens entre ces entités

ATTENTION : Dans le MCD on ne parle encore de table, de colonnes, champs, id, primary/foreign key 

Il s'agit de déterminer les points suivants :
    - entités
    - attributs
    - les associations entre entités
    - Les cardinalités
    - discriminant (ou déterminant)
    - code entité (permet de simuler un peu l'utilisation d'un id dans notre MCD)

## Construction du MCD

- quiz
- membre
- categorie
- niveau 
- question
- réponse

cf MCD.png

## Une manière encore plus simple : Mocodo

On peut utiliser un outil tel que mocodo pour faire notre MCD.

On viendra définir nos entités/associations/cardinalités sous forme de texte.

Un exemple pour illustrer :

```:
:
valide, 11 question, 01 réponse

niveau: code niveau, nom
défini, 0N niveau, 11 question
question: code question, description, anecdote, wiki
possède, 0N question, 11 réponse
réponse: code réponse, description

compose, 11 question, 0N quizz

utilisateur: code utilisateur, prénom, nom, email, mot de passe
créé, 0N utilisateur, 11 quizz
quizz: code quizz, titre, description
appartient, 0N quizz, 0N catégorie
catégorie : code catégorie, nom
```

