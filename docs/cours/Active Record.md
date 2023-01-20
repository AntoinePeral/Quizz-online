# Active Record

Contexte :

On aimerait, au lieu d'utiliser un dataMapper, utiliser ce qu'on appelle un Active Record.

Pourquoi Active Record ?

Dans le dossier sandbox/dataMapper_test/, on récupérait un user. Ici le user c'est notre Record. On dit qu'il est actif, puisqu'on l'utilise actuellement.

Et on voudrait changer son nom par exemple, et faire persister son nouveau nom grâce à user.save();

_______

## Qu'est-ce qu'un Active Record ?

Un Active Record, c'est un modèle qui "emballe" une ligne de notre database, l'encapsule et ajoute de la logique à ces données

=> C'est un **DESIGN PATTERN** : des pratiques de dev qui reviennent souvent

*A noter* : certains devs considèrent ce DP comme un anti-pattern (c'est-à-dire une mauvaise idée)

- Avantage :
  - Simplicité d'utilisation

Inconvénient : 
    - On mélange accès la BDD + de la logique propre à l'application

On peut trouver d'autres Design Patterns sur https://refactoring.guru/fr/design-patterns

## Passons à la pratique

Notre objectif aujourd'hui : Implémenter Active Record pour nos tags

On va implémenter le CRUD (Create Read Update Delete) sur les tags en version Active Record.

- tag.insert() : insérer le tag dans la BDD
- tag.getAll() : retourne tous les tags de la BDD
- tag.getOneById() : retourne un tag selon l'id fourni
- tag.update() : mettre à jour un tag
- tag.delete() : supprime un tag de la BDD

