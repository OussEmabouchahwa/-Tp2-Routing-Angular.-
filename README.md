# TP2 - Routing avec Angular

[![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

Ce projet est un travail pratique (TP) réalisé avec le framework **Angular**. Il a pour objectif de comprendre et manipuler le système de **routage (Angular Router)** pour naviguer entre plusieurs pages sans recharger le navigateur (SPA - Single Page Application).

---

## 📌 Sommaire

- [Fonctionnalités](#-fonctionnalités)
- [Captures d'écran](#-captures-décran)
- [Configuration des routes](#-configuration-des-routes)
- [Structure du projet](#-structure-du-projet)
- [Installation et exécution](#-installation-et-exécution)
- [Auteur](#-auteur)

---

## 🚀 Fonctionnalités

- **Navigation fluide** : Menu de navigation utilisant les directives `routerLink`.
- **Composant d'affichage** : Utilisation de `<router-outlet>` pour charger dynamiquement les composants.
- **Page d'accueil** : Route par défaut accessible sur `/`.
- **Autre page** : Route secondaire accessible sur `/autre`.
- **Page d'erreur 404** : Redirection automatique vers `NotFoundComponent` en cas d'URL inexistante (`path: '**'`).

---

## 📸 Captures d'écran

### 1. Page d'Accueil (`/`)
> Vue de la page d'accueil avec la barre de navigation.

![Page Accueil](./ScrineShouts/screenshot-2026-10-12-132520.png)

---

### 2. Autre Page (`/autre`)
> Vue de la deuxième page après un clic sur le lien de navigation.

![Autre Page](./ScrineShouts/autre.png)

---

## 🧭 Configuration des routes

Les routes sont définies dans le fichier [`src/app/app.routes.ts`](src/app/app.routes.ts) :

```typescript
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AutreComponent } from './autre/autre.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },        // Route par défaut (Accueil)
  { path: 'autre', component: AutreComponent },     // Deuxième page
  { path: '**', component: NotFoundComponent }      // Route 404 (Wildcard)
];
```

---

## 📂 Structure du projet

```plaintext
src/
└── app/
    ├── accueil/                 # Composant de la page d'accueil
    │   ├── accueil.component.html
    │   ├── accueil.component.scss
    │   └── accueil.component.ts
    ├── autre/                   # Composant de la deuxième page
    │   ├── autre.component.html
    │   ├── autre.component.scss
    │   └── autre.component.ts
    ├── not-found/               # Composant de la page d'erreur 404
    │   ├── not-found.component.html
    │   ├── not-found.component.scss
    │   └── not-found.component.ts
    ├── app.component.html       # Barre de navigation et <router-outlet>
    ├── app.component.ts
    ├── app.component.scss
    └── app.routes.ts            # Définition des routes
```

---

## 💻 Installation et exécution

### Prérequis

Assurez-vous d'avoir installé sur votre machine :
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [Angular CLI](https://angular.dev/tools/cli) : `npm install -g @angular/cli`

### Étapes d'installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/OussEmabouchahwa/-Tp2-Routing-Angular.-.git
   cd -Tp2-Routing-Angular.-
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   ng serve
   ```

4. **Accéder à l'application :**
   Ouvrez votre navigateur sur [http://localhost:4200/](http://localhost:4200/).

---

## 👤 Auteur

- **Oussema Bouchahwa** - [GitHub](https://github.com/OussEmabouchahwa)
