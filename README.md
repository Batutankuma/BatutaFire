#  <p align="center"><a href="https://github.com/Batutankuma/BatutaFire" target="_blank">BATUTAFIRE 🔥</a></p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

### Objectif

L'objectif de ce module est de mettre en place un système d'authentification sécurisé dans une application NestJS en utilisant JSON Web Tokens (JWT) pour la gestion des sessions, BcryptJS pour le hachage sécurisé des mots de passe, et Prisma comme ORM pour interagir avec la base de données.

### Composants principaux
 - AuthService : Ce service est responsable de la validation des utilisateurs. Il utilise BcryptJS pour comparer les mots de passe hachés stockés en base de données avec ceux fournis lors de l'authentification.

 - LocalStrategy : Stratégie d'authentification locale basée sur le module Passport. Elle est utilisée pour valider les identifiants d'utilisateur (par exemple, nom d'utilisateur et mot de passe) lors de la connexion.

- JwtStrategy : Stratégie d'authentification basée sur JWT, également intégrée avec Passport. Elle permet de vérifier la validité des tokens JWT pour assurer une authentification étendue sur les routes protégées.

 - AuthController : Contrôleur qui expose les points de terminaison nécessaires pour l'authentification, tels que la route de connexion (/auth/login), où les utilisateurs peuvent soumettre leurs informations d'identification.

 - PrismaService : Service Prisma qui agit comme une couche d'abstraction pour interagir avec la base de données. Il peut être utilisé pour rechercher des utilisateurs, les créer, et effectuer d'autres opérations liées à la gestion des données d'authentification.

### Fonctionnement
 - Inscription et stockage des utilisateurs : Lorsqu'un utilisateur s'inscrit, son mot de passe est haché à l'aide de BcryptJS avant d'être stocké dans la base de données à l'aide de Prisma.

 - Connexion : Lorsque l'utilisateur tente de se connecter, la stratégie locale est déclenchée. Elle utilise le service d'authentification pour valider les identifiants et retourne un token JWT signé si l'authentification réussit.

 - Protection des routes : Les routes nécessitant une authentification sont protégées à l'aide de la stratégie JWT. Avant d'accéder à ces routes, le token JWT fourni dans l'en-tête de la requête est vérifié pour son intégrité et sa validité.

### Avantages
 - Sécurité : L'utilisation de BcryptJS garantit le stockage sécurisé des mots de passe hachés, réduisant ainsi les risques liés aux attaques par force brute.

- JWT pour la gestion des sessions : L'utilisation de JWT permet une gestion efficace des sessions sans avoir besoin de stocker des informations côté serveur, ce qui facilite le passage à une architecture distribuée.

 - Abstraction de la base de données : Prisma permet une abstraction facile de la base de données, facilitant ainsi la gestion et la recherche d'utilisateurs.

 - Modularité : Le module est conçu de manière modulaire, ce qui le rend facilement extensible et réutilisable dans d'autres parties de l'application.

 - Considérations
Assurez-vous de gérer correctement les erreurs, notamment en renvoyant des réponses appropriées en cas d'échec d'authentification.

- La configuration de JWT, y compris la gestion des secrets et des options d'expiration, est cruciale pour la sécurité.

- Considérez l'ajout d'autres fonctionnalités telles que la gestion des sessions, la réinitialisation du mot de passe, etc., en fonction des exigences de l'application.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [BATUTA NKUMA Sael](https://github.com/Batutankuma)
- Twitter - [BaATUTA NKUMA Sael](twitter.com/BatutaSael)
- Website - [https://nestjs.com](https://nestjs.com/)https://
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
